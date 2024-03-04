import { Router } from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../app/controllers/product.js';
import { verifyAdmin, verifyToken, verifyUser } from '../app/middlewares/auth.js';

const router = Router();

router.post('/', verifyToken, verifyAdmin, createProduct);
router.put('/:slug', verifyToken, verifyAdmin, updateProduct);
router.delete('/:slug', verifyToken, verifyAdmin, deleteProduct);
router.get('/:slug', verifyToken, getProduct);
router.get('/', verifyToken, getProducts);

export default router;
