import { Router } from 'express';
import { getToken } from '../controllers/login.controller.js';

const router = Router();

// routes
router.post('/', getToken);

export default router;