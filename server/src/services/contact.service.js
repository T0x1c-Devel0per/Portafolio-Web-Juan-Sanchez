import { sendBrevoEmail } from './email/brevo.service.js';
import { buildContactEmail } from './email/templates/contactEmail.template.js';
import { buildContactAutoReplyEmail } from './email/templates/contactAutoReply.template.js';

export const contactService = {
  async sendMessage(payload) {
    const { name, email, message } = payload;
    const cleanPayload = { name, email, message };
    const teamEmail = buildContactEmail(cleanPayload);
    const autoReplyEmail = buildContactAutoReplyEmail(cleanPayload);

    await sendBrevoEmail(teamEmail);
    const autoReply = await sendBrevoEmail(autoReplyEmail);

    return { messageId: autoReply.messageId };
  }
};
