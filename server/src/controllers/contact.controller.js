import { contactService } from '../services/contact.service.js';
import { validateContactPayload } from '../validators/contact.validator.js';

export async function createContactMessage(request, response, next) {
  try {
    const payload = validateContactPayload(request.body);
    const result = await contactService.sendMessage(payload);

    response.status(202).json({
      ok: true,
      message: 'Mensaje enviado correctamente.',
      id: result.messageId
    });
  } catch (error) {
    next(error);
  }
}
