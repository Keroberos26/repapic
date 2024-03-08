import { Router } from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../app/controllers/product.js';
import { verifyAdmin } from '../app/middlewares/auth.js';

const router = Router();

router.post('/', verifyAdmin, createProduct);
router.put('/:slug', verifyAdmin, updateProduct);
router.delete('/:slug', verifyAdmin, deleteProduct);
router.get('/:slug', getProduct);
router.get('/', getProducts);

export default router;
