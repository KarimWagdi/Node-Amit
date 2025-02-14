import { Router } from 'express'
import UserController from '../Controller/UserController'
import CategoriesController from '../Controller/CategoriesController';
const router = Router()

router.get('/', CategoriesController.getCategories);

router.post('/', CategoriesController.addCategory);
router.put('/:id', CategoriesController.updateCategory);

router.delete('/:id', CategoriesController.deleteCategory);

export default router