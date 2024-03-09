import { Router } from 'express';
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from '../app/controllers/order.js';
import { verifyAdmin, verifyUser } from '../app/middlewares/auth.js';

const router = Router();

router.put('/:id', verifyAdmin, updateOrder);
router.delete('/:id', verifyAdmin, deleteOrder);
router.get('/:userId/:id', verifyUser, getOrder);
router.get('/', verifyAdmin, getOrders);

export default router;
