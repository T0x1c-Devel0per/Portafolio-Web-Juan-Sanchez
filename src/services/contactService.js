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
      throw new Error(data.message || 'No fue posible enviar el mensaje.');
    }

    return data;
  } finally {
    window.clearTimeout(timeout);
  }
}
