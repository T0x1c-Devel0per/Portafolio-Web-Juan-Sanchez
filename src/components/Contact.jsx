import { useMemo, useRef, useState } from 'react';
import { Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import Section from '@components/Section.jsx';
import { owner } from '@services/portfolioData.js';
import { sendContactMessage } from '@services/contactService.js';

const initialForm = { name: '', email: '', message: '', company: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const isSubmittingRef = useRef(false);
  const startedAt = useMemo(() => Date.now(), []);

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmittingRef.current) return;

    const validationError = validateClientForm(form);

    if (validationError) {
      setErrorMessage(validationError);
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');
    isSubmittingRef.current = true;

    try {
      await sendContactMessage({ ...form, startedAt });
      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      setErrorMessage(error.message);
      setStatus('error');
    } finally {
      isSubmittingRef.current = false;
    }
  }

  return (
    <Section id="contacto" eyebrow="Contacto" title="Disponible para procesos de selección y conversaciones técnicas.">
      <div className="contact-layout">
        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          <input
            className="honeypot-field"
            name="company"
            value={form.company}
            onChange={update}
            tabIndex={-1}
            autoComplete="new-password"
            aria-hidden="true"
          />
          <label>
            Nombre
            <input name="name" value={form.name} onChange={update} required minLength={2} maxLength={80} autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={update} required maxLength={120} autoComplete="email" />
          </label>
          <label>
            Mensaje
            <textarea name="message" rows="5" value={form.message} onChange={update} required minLength={10} maxLength={1500} />
          </label>
          <button className="button button-primary magnetic" type="submit" disabled={status === 'loading'}>
            {status === 'success' ? <CheckCircle2 size={18} /> : <Send size={18} />}
            {status === 'loading' ? 'Enviando...' : status === 'success' ? 'Mensaje listo' : 'Enviar mensaje'}
          </button>
          {status === 'error' && <p className="form-note error">{errorMessage || 'Algo falló. Revisa el endpoint o escríbeme por redes.'}</p>}
        </form>

        <aside className="contact-aside">
          <p>
            Respondo en menos de 24h. Interesado en equipos donde pueda aportar en producto, backend, infraestructura e
            IA aplicada con responsabilidad técnica.
          </p>
          <div className="social-stack">
            <a className="social-link magnetic" href={owner.github} target="_blank" rel="noreferrer">
              <Github size={20} />
              GitHub
            </a>
            <a className="social-link magnetic" href={owner.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function validateClientForm({ name, email, message, company }) {
  if (company) return 'No fue posible validar el formulario.';
  if (name.trim().length < 2) return 'Escribe un nombre válido.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return 'Escribe un email válido.';
  if (message.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres.';
  return '';
}
