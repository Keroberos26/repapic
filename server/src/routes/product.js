import { Router } from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../app/controllers/product.js';
import { verifyAdmin, verifyUser } from '../app/middlewares/auth.js';
import { editReview, writeReview } from '../app/controllers/review.js';

const router = Router();

router.post('/', verifyAdmin, createProduct);
router.post('/:slug/:userId/review', verifyUser, writeReview);
router.put('/:slug', verifyAdmin, updateProduct);
router.put('/:slug/:userId/review', verifyUser, editReview);
router.delete('/:slug', verifyAdmin, deleteProduct);
router.get('/:slug', getProduct);
router.get('/', getProducts);

export default router;
