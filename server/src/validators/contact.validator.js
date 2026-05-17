import { isValidEmail } from '../utils/isValidEmail.js';

export function validateContactPayload(body) {
  const name = normalizeText(body?.name);
  const email = normalizeText(body?.email);
  const message = normalizeText(body?.message);
  const company = normalizeText(body?.company);
  const captchaToken = normalizeText(body?.captchaToken);
  const startedAt = Number(body?.startedAt);
  const elapsedMs = Date.now() - startedAt;

  if (company) {
    throwValidationError('No fue posible validar el formulario.');
  }

  if (!Number.isFinite(startedAt) || elapsedMs < 1200 || elapsedMs > 30 * 60 * 1000) {
    throwValidationError('No fue posible validar el tiempo del formulario.');
  }

  if (!name || name.length < 2 || name.length > 80) {
    throwValidationError('El nombre debe tener entre 2 y 80 caracteres.');
  }

  if (!email || !isValidEmail(email) || email.length > 120) {
    throwValidationError('El email no es válido.');
  }

  if (!message || message.length < 10 || message.length > 1500) {
    throwValidationError('El mensaje debe tener entre 10 y 1500 caracteres.');
  }

  if (!captchaToken || captchaToken.length < 10) {
    throwValidationError('Completa el captcha para continuar.');
  }

  return { name, email, message, captchaToken };
}

function normalizeText(value) {
  return String(value || '').trim();
}

function throwValidationError(message) {
  const error = new Error(message);
  error.statusCode = 400;
  throw error;
}
