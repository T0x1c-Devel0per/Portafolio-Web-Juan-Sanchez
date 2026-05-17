import { escapeHtml } from '../../../utils/escapeHtml.js';

export function buildContactAutoReplyEmail({ name, email }) {
  const safeName = escapeHtml(name);

  return {
    subject: 'Recibí tu mensaje - Gracias por escribir',
    to: [{ name, email }],
    textContent:
      `Hola ${name},\n\n` +
      'Gracias por contactarme. Ya recibí tu mensaje y voy a revisarlo con atención.\n' +
      'Te responderé en menos de 24 horas con una respuesta concreta.\n\n' +
      'Un saludo,\nJuan Pablo Sánchez Rodríguez',
    htmlContent: `
      <main style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
        <p style="font-size: 12px; text-transform: uppercase; color: #008f4c;">Confirmación de contacto</p>
        <h1 style="font-size: 22px; margin: 0 0 12px;">Gracias por escribir, ${safeName}</h1>
        <p>Tu mensaje ya fue recibido correctamente.</p>
        <p>Lo revisaré con calma y te responderé en menos de 24 horas con una respuesta directa y útil.</p>
        <p style="margin-top: 20px;">Un saludo,<br /><strong>Juan Pablo Sánchez Rodríguez</strong></p>
      </main>
    `
  };
}
