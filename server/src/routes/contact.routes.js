import { Router } from 'express';
import { createContactMessage } from '../controllers/contact.controller.js';
import { contactRateLimiter } from '../middlewares/rateLimiter.js';

const router = Router();

router.post('/', contactRateLimiter, createContactMessage);

export default router;
