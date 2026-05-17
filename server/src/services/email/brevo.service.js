import { env } from '../../config/env.js';

const BREVO_SEND_EMAIL_URL = 'https://api.brevo.com/v3/smtp/email';

export async function sendBrevoEmail({ subject, htmlContent, textContent, replyTo, to }) {
  ensureBrevoConfig();

  const recipients = to?.length
    ? to
    : [
        {
          name: env.brevo.toName,
          email: env.brevo.toEmail
        }
      ];

  const response = await fetch(BREVO_SEND_EMAIL_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': env.brevo.apiKey,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      sender: {
        name: env.brevo.senderName,
        email: env.brevo.senderEmail
      },
      to: recipients,
      replyTo,
      subject,
      htmlContent,
      textContent
    })
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = data.message || 'Brevo rechazó el envío del correo.';
    const error = new Error(message);
    error.statusCode = response.status;
    throw error;
  }

  return { messageId: data.messageId };
}

function ensureBrevoConfig() {
  const required = [
    ['BREVO_API_KEY', env.brevo.apiKey],
    ['SENDER_EMAIL', env.brevo.senderEmail]
  ];

  const missing = required.filter(([, value]) => !value).map(([key]) => key);
  if (missing.length) {
    const error = new Error(`Faltan variables de entorno: ${missing.join(', ')}`);
    error.statusCode = 500;
    throw error;
  }
}
