import { useEffect, useMemo, useRef, useState } from 'react';
import { Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import Section from '@components/Section.jsx';
import { owner } from '@services/portfolioData.js';
import { sendContactMessage } from '@services/contactService.js';

const initialForm = { name: '', email: '', message: '', company: '' };
const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? '';

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const isSubmittingRef = useRef(false);
  const startedAt = useMemo(() => Date.now(), []);
  const captchaContainerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    if (status !== 'success') return;
    const timeoutId = window.setTimeout(() => setStatus('idle'), 4200);
    return () => window.clearTimeout(timeoutId);
  }, [status]);

  useEffect(() => {
    if (!turnstileSiteKey || !captchaContainerRef.current) return;

    let cancelled = false;

    const renderWidget = () => {
      if (cancelled || !window.turnstile || !captchaContainerRef.current) return;
      if (widgetIdRef.current !== null) return;

      // Renderizamos el captcha en modo explícito para controlar reset y estado.
      widgetIdRef.current = window.turnstile.render(captchaContainerRef.current, {
        sitekey: turnstileSiteKey,
        theme: 'dark',
        callback: (token) => setCaptchaToken(token),
        'expired-callback': () => setCaptchaToken(''),
        'error-callback': () => setCaptchaToken('')
      });
    };

    if (window.turnstile) {
      renderWidget();
      return () => {
        cancelled = true;
      };
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.onload = renderWidget;
    document.head.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, []);

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmittingRef.current) return;

    const validationError = validateClientForm(form, captchaToken);
    if (validationError) {
      setErrorMessage(validationError);
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');
    isSubmittingRef.current = true;

    try {
      await sendContactMessage({ ...form, startedAt, captchaToken });
      setStatus('success');
      setForm(initialForm);
      setCaptchaToken('');
      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.reset(widgetIdRef.current);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setStatus('error');
    } finally {
      isSubmittingRef.current = false;
    }
  }

  return (
    <Section id="contacto" eyebrow="Contacto" title="Disponible para procesos de seleccion y conversaciones tecnicas.">
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
          <div className="captcha-wrap">
            <div ref={captchaContainerRef} />
          </div>
          <button className="button button-primary magnetic" type="submit" disabled={status === 'loading'}>
            {status === 'success' ? <CheckCircle2 size={18} /> : <Send size={18} />}
            {status === 'loading' ? 'Enviando...' : status === 'success' ? 'Mensaje listo' : 'Enviar mensaje'}
          </button>
          {status === 'success' && (
            <p className="form-note success" role="status" aria-live="polite">
              Mensaje enviado con exito. Revisa tu correo: te envie una confirmacion.
            </p>
          )}
          {status === 'error' && (
            <p className="form-note error">{errorMessage ?? 'Algo fallo. Revisa el endpoint o escribeme por redes.'}</p>
          )}
        </form>

        <aside className="contact-aside">
          <p>
            Respondo en menos de 24h. Interesado en equipos donde pueda aportar en producto, backend, infraestructura e IA
            aplicada con responsabilidad tecnica.
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

function validateClientForm({ name, email, message, company }, captchaToken) {
  if (company) return 'No fue posible validar el formulario.';
  if (name.trim().length < 2) return 'Escribe un nombre valido.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return 'Escribe un email valido.';
  if (message.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres.';
  if (!turnstileSiteKey) return 'Falta VITE_TURNSTILE_SITE_KEY.';
  if (!captchaToken) return 'Completa el captcha antes de enviar.';
  return '';
}
