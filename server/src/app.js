import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import contactRoutes from './routes/contact.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { requireAllowedOrigin } from './middlewares/requireAllowedOrigin.js';
import { env } from './config/env.js';

const app = express();
const appDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(appDir, '../../dist');
const distIndexPath = path.join(distDir, 'index.html');
const hasBuiltFrontend = fs.existsSync(distIndexPath);

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", 'https://challenges.cloudflare.com'],
        scriptSrcElem: ["'self'", 'https://challenges.cloudflare.com'],
        frameSrc: ["'self'", 'https://challenges.cloudflare.com'],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        styleSrcElem: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        imgSrc: ["'self'", 'data:', 'blob:'],
        connectSrc: ["'self'", 'https://challenges.cloudflare.com'],
        fontSrc: ["'self'", 'data:', 'https://fonts.gstatic.com']
      }
    }
  })
);
app.use(
  cors({
    origin: env.clientOrigin || true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Accept'],
    maxAge: 600
  })
);
app.use(express.json({ limit: '12kb' }));
app.use(morgan(env.nodeEnv === 'production' ? 'combined' : 'dev'));

app.get('/api/health', (_request, response) => {
  response.json({ ok: true, service: 'portfolio-api' });
});

app.use('/api/contact', requireAllowedOrigin, contactRoutes);

if (hasBuiltFrontend) {
  app.use(express.static(distDir));
  app.get('*', (request, response, next) => {
    if (request.path.startsWith('/api')) {
      next();
      return;
    }

    response.sendFile(distIndexPath);
  });
}

app.use(errorHandler);

export default app;
