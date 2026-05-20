import { useEffect, useRef, useState } from 'react';
import { Bot, Send, Sparkles, UserRound } from 'lucide-react';
import Section from '@components/Section.jsx';
import { askCvAssistant } from '@services/chatService.js';

const starterPrompts = [
  'Resume la experiencia de Juan Pablo',
  '¿Qué tecnologías maneja?',
  '¿Qué formación tiene?'
];

const initialMessages = [
  {
    role: 'assistant',
    content:
      'Hola, soy el asistente del CV de Juan Pablo. Puedes preguntarme por sus habilidades, experiencia, formación o disponibilidad.'
  }
];

export default function CvChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const isSubmittingRef = useRef(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, status]);

  async function submitQuestion(event, prompt) {
    event?.preventDefault();
    if (isSubmittingRef.current) return;

    const content = (prompt ?? question).trim();
    if (content.length < 3) {
      setErrorMessage('Escribe una pregunta un poco más clara.');
      setStatus('error');
      return;
    }

    const nextMessages = [...messages, { role: 'user', content }];
    setMessages(nextMessages);
    setQuestion('');
    setStatus('loading');
    setErrorMessage('');
    isSubmittingRef.current = true;

    try {
      const answer = await askCvAssistant(nextMessages);
      setMessages([...nextMessages, { role: 'assistant', content: answer }]);
      setStatus('idle');
    } catch (error) {
      setErrorMessage(error.message);
      setStatus('error');
    } finally {
      isSubmittingRef.current = false;
    }
  }

  return (
    <Section id="asistente" eyebrow="Asistente CV" title="Pregúntale al chatbot por habilidades, formación o experiencia.">
      <div className="chat-layout">
        <aside className="chat-aside">
          <div className="chat-orb">
            <Bot size={34} />
          </div>
          <p>
            Este asistente responde con base en el CV de Juan Pablo. Está pensado para reclutadores, clientes y equipos
            técnicos que quieran validar rápido su perfil.
          </p>
          <div className="prompt-stack">
            {starterPrompts.map((prompt) => (
              <button className="prompt-chip magnetic" key={prompt} type="button" onClick={(event) => submitQuestion(event, prompt)}>
                <Sparkles size={15} />
                {prompt}
              </button>
            ))}
          </div>
        </aside>

        <div className="chat-panel glass-card">
          <div className="chat-messages" ref={chatContainerRef} aria-live="polite">
            {messages.map((message, index) => (
              <article className={`chat-bubble ${message.role}`} key={`${message.role}-${index}`}>
                <span>{message.role === 'assistant' ? <Bot size={16} /> : <UserRound size={16} />}</span>
                <div className="chat-bubble-text">
                  <MarkdownText content={message.content} />
                </div>
              </article>
            ))}
            {status === 'loading' && (
              <article className="chat-bubble assistant is-thinking">
                <span>
                  <Bot size={16} />
                </span>
                <p>Revisando el CV...</p>
              </article>
            )}
          </div>

          <form className="chat-form" onSubmit={submitQuestion}>
            <label htmlFor="cv-chat-question">Pregunta sobre el perfil</label>
            <div className="chat-input-row">
              <input
                id="cv-chat-question"
                maxLength={500}
                name="question"
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Ej: ¿Juan Pablo tiene experiencia con bases de datos?"
                value={question}
              />
              <button className="button button-primary magnetic" type="submit" disabled={status === 'loading'}>
                <Send size={18} />
                Preguntar
              </button>
            </div>
            {status === 'error' && <p className="form-note error">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </Section>
  );
}

function MarkdownText({ content }) {
  if (!content) return null;

  const lines = content.split('\n');

  return (
    <div className="markdown-content">
      {lines.map((line, lineIndex) => {
        const trimmed = line.trim();

        // Handle headings
        if (trimmed.startsWith('#### ')) {
          return (
            <h4 key={lineIndex}>
              {renderInlineStyles(trimmed.slice(5))}
            </h4>
          );
        }
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={lineIndex}>
              {renderInlineStyles(trimmed.slice(4))}
            </h3>
          );
        }
        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={lineIndex}>
              {renderInlineStyles(trimmed.slice(3))}
            </h2>
          );
        }

        // Handle bullet lists
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          return (
            <div key={lineIndex} className="md-list-item">
              <span className="md-bullet">•</span>
              <span className="md-list-text">{renderInlineStyles(trimmed.slice(2))}</span>
            </div>
          );
        }

        // Handle numbered lists
        const numListMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numListMatch) {
          return (
            <div key={lineIndex} className="md-list-item">
              <span className="md-number">{numListMatch[1]}.</span>
              <span className="md-list-text">{renderInlineStyles(numListMatch[2])}</span>
            </div>
          );
        }

        // Empty lines
        if (trimmed === '') {
          return <div key={lineIndex} className="md-empty-line" />;
        }

        // Standard paragraph
        return (
          <p key={lineIndex}>
            {renderInlineStyles(line)}
          </p>
        );
      })}
    </div>
  );
}

function renderInlineStyles(text) {
  const parts = text.split('**');
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index}>{part}</strong>;
    }
    return part;
  });
}
