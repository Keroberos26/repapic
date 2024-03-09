import { Router } from 'express';
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from '../app/controllers/order.js';
import { verifyAdmin, verifyUser } from '../app/middlewares/auth.js';

const router = Router();

router.post('/', verifyUser, createOrder);
router.put('/:id', verifyAdmin, updateOrder);
router.delete('/:id', verifyUser, deleteOrder);
router.get('/:id', verifyUser, getOrder);
router.get('/', verifyUser, getOrders);

export default router;
