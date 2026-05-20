import { answerCvQuestion } from '../services/chat.service.js';
import { validateChatPayload } from '../validators/chat.validator.js';

export async function createChatAnswer(request, response, next) {
  try {
    const payload = validateChatPayload(request.body);
    const result = await answerCvQuestion(payload.messages);

    response.json({
      ok: true,
      answer: result.answer,
      model: result.model
    });
  } catch (error) {
    next(error);
  }
}
