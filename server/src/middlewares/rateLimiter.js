const buckets = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const CONTACT_MAX_REQUESTS = 5;
const CHAT_MAX_REQUESTS = 20;

export function contactRateLimiter(request, _response, next) {
  rateLimitByIp(request, next, CONTACT_MAX_REQUESTS, 'Demasiados intentos. Intenta de nuevo más tarde.');
}

export function chatRateLimiter(request, _response, next) {
  rateLimitByIp(request, next, CHAT_MAX_REQUESTS, 'Demasiadas preguntas por ahora. Intenta de nuevo en unos minutos.');
}

function rateLimitByIp(request, next, maxRequests, message) {
  const key = `${request.path}:${request.ip || 'unknown'}`;
  const now = Date.now();
  const bucket = buckets.get(key) || { count: 0, resetAt: now + WINDOW_MS };

  if (now > bucket.resetAt) {
    bucket.count = 0;
    bucket.resetAt = now + WINDOW_MS;
  }

  bucket.count += 1;
  buckets.set(key, bucket);

  if (bucket.count > maxRequests) {
    const error = new Error(message);
    error.statusCode = 429;
    next(error);
    return;
  }

  next();
}

setInterval(() => {
  const now = Date.now();
  for (const [key, bucket] of buckets.entries()) {
    if (now > bucket.resetAt) buckets.delete(key);
  }
}, WINDOW_MS).unref();
