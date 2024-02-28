import { Router } from 'express';
import { login, logout, refreshToken, register } from '../app/controllers/auth.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.put('/refresh-token', refreshToken);
router.get('/logout', logout);

export default router;
