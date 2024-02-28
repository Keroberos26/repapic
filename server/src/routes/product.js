import { Router } from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../app/controllers/product.js';
import { verifyAdmin, verifyToken, verifyUser } from '../app/middlewares/auth.js';

const router = Router();

router.post('/', createProduct);
router.put('/:slug', updateProduct);
router.delete('/:slug', deleteProduct);
router.get('/:slug', getProduct);
router.get('/', verifyToken, getProducts);

export default router;
