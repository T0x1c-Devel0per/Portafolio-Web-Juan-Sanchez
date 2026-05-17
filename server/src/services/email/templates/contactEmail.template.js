import { escapeHtml } from '../../../utils/escapeHtml.js';

export function buildContactEmail({ name, email, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');

  return {
    subject: `Nuevo contacto desde el CV web: ${name}`,
    replyTo: {
      name,
      email
    },
    textContent: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    htmlContent: `
      <main style="font-family: Arial, sans-serif; color: #111; line-height: 1.55;">
        <p style="font-size: 12px; text-transform: uppercase; color: #008f4c;">CV web / Contacto</p>
        <h1 style="font-size: 22px; margin: 0 0 12px;">Nuevo mensaje para Juan Pablo</h1>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <div style="margin-top: 18px; padding: 16px; border-left: 3px solid #00ff87; background: #f6f6f6;">
          ${safeMessage}
        </div>
      </main>
    `
  };
}
