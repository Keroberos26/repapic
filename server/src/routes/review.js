import { Router } from 'express';
import { createReview, deleteReview, getReview, getReviews, updateReview } from '../app/controllers/review.js';
import { verifyUser } from '../app/middlewares/auth.js';

const router = Router();

router.post('/', verifyUser, createReview);
router.put('/:id', verifyUser, updateReview);
router.delete('/:id', verifyUser, deleteReview);
router.get('/:id', getReview);
router.get('/', getReviews);

export default router;
