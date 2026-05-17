import { sendBrevoEmail } from './email/brevo.service.js';
import { buildContactEmail } from './email/templates/contactEmail.template.js';

export const contactService = {
  async sendMessage(payload) {
    const email = buildContactEmail(payload);
    return sendBrevoEmail(email);
  }
};
