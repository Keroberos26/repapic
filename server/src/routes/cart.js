import { Router } from 'express';
import { createCart, deleteCart, getCart, getCarts, updateCart } from '../app/controllers/cart.js';
import { verifyAdmin, verifyUser } from '../app/middlewares/auth.js';

const router = Router();

router.post('/', verifyUser, createCart);
router.put('/:id', verifyUser, updateCart);
router.delete('/:id', verifyUser, deleteCart);
router.get('/:id', getCart);
router.get('/', verifyAdmin, getCarts);

export default router;
