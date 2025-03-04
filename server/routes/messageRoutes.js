import express from 'express';
import { sendMessage, getMessages } from '../controllers/messageController.js';
import protectRoute from '../middlewares/protectedRoute.js';

const router = express.Router();

router.get('/:id', protectRoute, getMessages);
router.post('/send/:id', protectRoute, sendMessage);

export default router;