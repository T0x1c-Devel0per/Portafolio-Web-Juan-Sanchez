# Portafolio de Juan Pablo Sánchez Rodríguez

Portafolio profesional construido con Vite, React 18, Framer Motion, TailwindCSS y React Three Fiber. La dirección visual es dark premium con acento esmeralda, copy humano y una narrativa centrada en tres mundos: producto, infraestructura e IA aplicada.

## Estructura

- `index.html`: metatags SEO, Open Graph, fuentes y punto de montaje.
- `vite.config.js`: aliases por capa y code splitting para React, Motion y Three.js.
- `tailwind.config.js`: tokens visuales del sistema: colores, tipografías y sombras.
- `.env.example`: variables opcionales para endpoint de contacto y perfiles sociales.
- `public/og-image.png`: imagen Open Graph generada para compartir el sitio.
- `src/main.jsx`: arranque de React con lazy loading de la app.
- `src/App.jsx`: composición principal de secciones.
- `src/styles.css`: estilos globales, responsive, glassmorphism, cursor, constelaciones y fallbacks.
- `src/assets/avatar-jp.png`: avatar ilustrado placeholder, listo para reemplazar por foto real.
- `src/components`: UI reutilizable y secciones visibles.
- `src/hooks`: media queries, reduced motion, SEO dinámico por sección y tilt 3D.
- `src/services`: datos del portafolio y servicio de contacto.
- `src/scenes`: escena 3D con nodos, raycasting y animación con `useFrame`.

## Instalación

1. Instala dependencias:

```bash
npm install
```

2. Crea el archivo de entorno del frontend:

```bash
copy .env.example .env
```

Para el backend también puedes crear `server/.env`:

```bash
copy server\.env.example server\.env
```

3. Ajusta tus enlaces reales:

```env
VITE_CONTACT_ENDPOINT=
VITE_GITHUB_URL=https://github.com/tu-usuario
VITE_LINKEDIN_URL=https://linkedin.com/in/tu-usuario
```

4. Levanta el entorno local:

```bash
npm run dev
```

Para levantar frontend y backend juntos:

```bash
npm run dev:full
```

Frontend: `http://127.0.0.1:5173`
Backend: `http://localhost:4000`

## Deploy en Railway

1. Vincula el proyecto:
```bash
railway link
```
2. Configura variables en Railway:
`NODE_ENV=production`
`BREVO_API_KEY=...`
`SENDER_EMAIL=...`
`BREVO_SENDER_NAME=Juan Pablo Sánchez Rodríguez`
`BREVO_TO_NAME=Juan Pablo Sánchez Rodríguez`
`CLIENT_ORIGIN=https://<tu-dominio-railway>`
3. Despliega:
```bash
railway up
```

En producción, el backend sirve el frontend compilado (`dist`) y también expone `/api/*`.

Nota de CORS/origin:
- `CLIENT_ORIGIN` acepta una o varias URLs separadas por coma.
- Ejemplo: `CLIENT_ORIGIN=https://app.up.railway.app,https://www.tudominio.com`

5. Genera build de producción:

```bash
npm run build
```

## Variables de entorno

- `VITE_CONTACT_ENDPOINT`: endpoint del formulario. En desarrollo puede ser `/api/contact` porque Vite proxya hacia el backend.
- `VITE_GITHUB_URL`: URL pública de GitHub.
- `VITE_LINKEDIN_URL`: URL pública de LinkedIn.
- `PORT`: puerto del backend.
- `CLIENT_ORIGIN`: origen permitido por CORS.
- `BREVO_API_KEY`: API key v3 de Brevo.
- `BREVO_SENDER_NAME`: nombre del remitente.
- `SENDER_EMAIL`: email verificado en Brevo que envía y recibe los mensajes del formulario. El email escrito por el usuario se usa como `replyTo`.
- `BREVO_TO_NAME`: nombre del destinatario.

## Backend MVC

- `server/server.js`: arranque del servidor.
- `server/src/app.js`: configuración de Express, CORS, seguridad y rutas.
- `server/src/routes`: definición de endpoints.
- `server/src/controllers`: entrada HTTP y respuestas.
- `server/src/services`: lógica de negocio y proveedor Brevo.
- `server/src/validators`: validación de payloads.
- `server/src/middlewares`: rate limit y manejo de errores.

El formulario envía `POST /api/contact`. El backend carga variables desde `server/.env` y también desde `.env` raíz como respaldo. Usa la API transaccional de Brevo (`/v3/smtp/email`) con el header `api-key`, manteniendo la credencial fuera del frontend.

Seguridad aplicada al formulario:

- La API key de Brevo solo vive en backend.
- CORS restringido a `CLIENT_ORIGIN`.
- Middleware de origen para rechazar requests de otros sitios.
- `helmet` para cabeceras HTTP seguras.
- Límite JSON de `12kb`.
- Rate limit por IP: 5 intentos cada 15 minutos.
- Honeypot invisible para bots.
- Validación de tiempo mínimo/máximo del formulario.
- Validación server-side de nombre, email y mensaje.
- Escape de HTML antes de construir el email.
- Timeout de 10 segundos desde el frontend.

## Proyectos sugeridos

1. Asistente comercial con IA que responda por voz y texto, integrado a CRM/ERP mediante webhooks.
2. Plantilla de despliegue seguro para apps Node.js en Ubuntu con SSL, rate limiting y monitoreo base.
3. Módulo Odoo 18 SaaS para automatizar solicitudes internas, aprobaciones y trazabilidad.
4. Dashboard full stack para mezclar métricas operativas en MySQL con eventos flexibles en MongoDB.
5. API REST pública de demostración con documentación, autenticación y protección contra abuso.

## Notas de reemplazo

El avatar actual está en `src/assets/avatar-jp.png` y fue generado como placeholder visual. Para usar una foto real, reemplaza ese archivo manteniendo el mismo nombre o actualiza el import en `src/components/About.jsx`.
