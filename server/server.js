import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDir = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(serverDir, '.env') });
dotenv.config();

const { default: app } = await import('./src/app.js');
const { env } = await import('./src/config/env.js');

const server = app.listen(env.port, () => {
  console.log(`API lista en http://localhost:${env.port}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`El puerto ${env.port} ya está en uso. Cierra el proceso anterior o cambia PORT en .env.`);
    process.exit(1);
  }

  throw error;
});
