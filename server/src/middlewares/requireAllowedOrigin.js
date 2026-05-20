import { env } from '../config/env.js';

export function requireAllowedOrigin(request, _response, next) {
  const origin = request.get('origin');
  const allowedOrigins = parseAllowedOrigins(env.clientOrigin);

  if (!allowedOrigins.length) {
    next();
    return;
  }

  // Navegaciones same-origin o herramientas server-to-server pueden no enviar Origin.
  if (!origin) {
    next();
    return;
  }

  const normalizedOrigin = normalizeOrigin(origin);
  const isAllowedByEnv = allowedOrigins.includes(normalizedOrigin);
  const requestOrigin = getRequestOrigin(request);
  const isSameOriginRequest = normalizedOrigin === requestOrigin;

  console.log('--- requireAllowedOrigin ---');
  console.log('Origin Header:', origin);
  console.log('Normalized Origin:', normalizedOrigin);
  console.log('Parsed env.clientOrigin:', allowedOrigins);
  console.log('Request Origin (Calculated):', requestOrigin);
  console.log('isAllowedByEnv:', isAllowedByEnv);
  console.log('isSameOriginRequest:', isSameOriginRequest);
  console.log('-----------------------------');

  if (isAllowedByEnv || isSameOriginRequest) {
    next();
    return;
  }

  const error = new Error('Origen no permitido.');
  error.statusCode = 403;
  next(error);
}

function parseAllowedOrigins(value) {
  return String(value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
    .map(normalizeOrigin);
}

function normalizeOrigin(value) {
  return String(value).trim().replace(/\/+$/, '').toLowerCase();
}

function getRequestOrigin(request) {
  const proto = (request.get('x-forwarded-proto') || request.protocol || 'http').split(',')[0].trim();
  const host = (request.get('x-forwarded-host') || request.get('host') || '').split(',')[0].trim().toLowerCase();
  return normalizeOrigin(`${proto}://${host}`);
}
