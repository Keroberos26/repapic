import { Router } from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../app/controllers/product.js';

const router = Router();

router.post('/', createProduct);
router.put('/:slug', updateProduct);
router.delete('/:slug', deleteProduct);
router.get('/:slug', getProduct);
router.get('/', getProducts);

export default router;
