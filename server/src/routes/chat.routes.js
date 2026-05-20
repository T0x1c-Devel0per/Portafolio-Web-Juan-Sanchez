import { Router } from 'express';
import { createChatAnswer } from '../controllers/chat.controller.js';
import { chatRateLimiter } from '../middlewares/rateLimiter.js';

const router = Router();

router.post('/', chatRateLimiter, createChatAnswer);

export default router;
