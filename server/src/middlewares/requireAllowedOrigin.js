import { env } from '../config/env.js';

export function requireAllowedOrigin(request, _response, next) {
  const origin = request.get('origin');

  if (!env.clientOrigin) {
    next();
    return;
  }

  if (!origin || origin === env.clientOrigin) {
    next();
    return;
  }

  const error = new Error('Origen no permitido.');
  error.statusCode = 403;
  next(error);
}
