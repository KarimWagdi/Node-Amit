import { Router } from 'express'
import CategoriesController from '../Controller/CategoriesController';
import requestValidate from '../MiddelWares/RequestValidate';
import { CategoryRequest } from '../Request/category Request';

const router = Router()
router.get('/', CategoriesController.getCategories);

router.post('/', requestValidate(CategoryRequest), CategoriesController.addCategory);
router.put('/:id', requestValidate(CategoryRequest), CategoriesController.updateCategory);

router.delete('/:id', CategoriesController.deleteCategory);

export default router;

