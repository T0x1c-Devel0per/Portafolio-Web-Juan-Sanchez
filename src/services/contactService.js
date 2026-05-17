export async function sendContactMessage(payload) {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact';
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      if (response.status === 400 && data.message?.toLowerCase().includes('captcha')) {
        throw new Error('Captcha invalido o expirado. Verificalo nuevamente.');
      }
      throw new Error(data.message || 'No fue posible enviar el mensaje.');
    }

    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('La solicitud tardo demasiado. Intenta otra vez.');
    }
    if (error.message === 'Failed to fetch') {
      throw new Error('No hay conexion con el servidor de contacto.');
    }
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}
