const MAX_MESSAGES = 8;
const MAX_MESSAGE_LENGTH = 500;

export function validateChatPayload(body) {
  const rawMessages = Array.isArray(body?.messages) ? body.messages : [];
  const messages = rawMessages
    .slice(-MAX_MESSAGES)
    .map((message) => ({
      role: message?.role === 'assistant' ? 'assistant' : 'user',
      content: normalizeText(message?.content)
    }))
    .filter((message) => message.content.length > 0);

  if (!messages.length) {
    throwValidationError('Escribe una pregunta para el asistente.');
  }

  const latestUserMessage = [...messages].reverse().find((message) => message.role === 'user');

  if (!latestUserMessage) {
    throwValidationError('El asistente necesita una pregunta para responder.');
  }

  return { messages };
}

function normalizeText(value) {
  return String(value ?? '').trim().slice(0, MAX_MESSAGE_LENGTH);
}

function throwValidationError(message) {
  const error = new Error(message);
  error.statusCode = 400;
  throw error;
}
