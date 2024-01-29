import { Router } from 'express';
import {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
} from '../app/controllers/category.js';

const router = Router();

router.post('/', createCategory);
router.put('/:slug', updateCategory);
router.delete('/:slug', deleteCategory);
router.get('/:slug', getCategory);
router.get('/', getCategories);

export default router;
