import { env } from '../../config/env.js';

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export async function verifyTurnstileToken({ token, ip }) {
  if (!env.security.enableCaptcha) return;

  if (!env.turnstile.secretKey) {
    const error = new Error('Falta TURNSTILE_SECRET_KEY en el servidor.');
    error.statusCode = 500;
    throw error;
  }

  const body = new URLSearchParams({
    secret: env.turnstile.secretKey,
    response: token,
    remoteip: ip
  });

  const response = await fetch(VERIFY_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    body
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.success) {
    const error = new Error('Captcha inválido. Intenta nuevamente.');
    error.statusCode = 400;
    throw error;
  }
}
