import { Router } from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../app/controllers/user.js';
import { verifyAdmin, verifyUser } from '../app/middlewares/auth.js';

const router = Router();

router.post('/', verifyAdmin, createUser);
router.put('/:id', verifyAdmin, updateUser);
router.delete('/:id', verifyAdmin, deleteUser);
router.get('/:id', verifyUser, getUser);
router.get('/', verifyAdmin, getUsers);

export default router;
