const buckets = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

export function contactRateLimiter(request, _response, next) {
  const key = request.ip || 'unknown';
  const now = Date.now();
  const bucket = buckets.get(key) || { count: 0, resetAt: now + WINDOW_MS };

  if (now > bucket.resetAt) {
    bucket.count = 0;
    bucket.resetAt = now + WINDOW_MS;
  }

  bucket.count += 1;
  buckets.set(key, bucket);

  if (bucket.count > MAX_REQUESTS) {
    const error = new Error('Demasiados intentos. Intenta de nuevo más tarde.');
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
