export async function askCvAssistant(messages) {
  const endpoint = import.meta.env.VITE_CHAT_ENDPOINT || '/api/chat';
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 18000);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messages }),
      signal: controller.signal
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || 'No fue posible responder la pregunta.');
    }

    return data.answer;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('El asistente tardó demasiado. Intenta con una pregunta más corta.');
    }
    if (error.message === 'Failed to fetch') {
      throw new Error('No hay conexión con el asistente del CV.');
    }
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}
