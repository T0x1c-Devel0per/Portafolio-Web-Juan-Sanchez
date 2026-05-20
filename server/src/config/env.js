export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 4000),
  clientOrigin: process.env.CLIENT_ORIGIN ?? '',
  brevo: {
    apiKey: process.env.BREVO_API_KEY ?? '',
    senderEmail: process.env.SENDER_EMAIL ?? '',
    senderName: process.env.BREVO_SENDER_NAME ?? 'Portfolio',
    toEmail: process.env.SENDER_EMAIL ?? '',
    toName: process.env.BREVO_TO_NAME ?? 'Juan Pablo'
  },
  openai: {
    apiKey: process.env.OPEN_IA_API_KEY ?? process.env.OPENAI_API_KEY ?? '',
    model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini'
  },
  turnstile: {
    secretKey: process.env.TURNSTILE_SECRET_KEY ?? ''
  },
  security: {
    enableCaptcha: process.env.ENABLE_CAPTCHA === 'true'
  }
};
