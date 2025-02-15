import { Router } from 'express'
import ProductController from '../Controller/ProductController'
import verifyToken from '../MiddelWares/Auth';
const router = Router()

router.get('/', verifyToken, ProductController.getAllProducts);

router.get('/:cat_id', verifyToken, ProductController.getProductsByCategory);

router.post('/', verifyToken, ProductController.addProduct);

router.put('/:id', verifyToken, ProductController.updateProduct);

router.delete('/:id', verifyToken, ProductController.deleteProduct);

export default router