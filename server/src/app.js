import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import contactRoutes from './routes/contact.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { requireAllowedOrigin } from './middlewares/requireAllowedOrigin.js';
import { env } from './config/env.js';

const app = express();
const appDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(appDir, '../../dist');

app.use(helmet());
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

if (env.nodeEnv === 'production') {
  app.use(express.static(distDir));
  app.get('*', (request, response, next) => {
    if (request.path.startsWith('/api')) {
      next();
      return;
    }

    response.sendFile(path.join(distDir, 'index.html'));
  });
}

app.use(errorHandler);

export default app;
