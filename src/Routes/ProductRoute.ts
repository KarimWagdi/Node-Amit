import { Router } from 'express'
import ProductController from '../Controller/ProductController'
import verifyToken from '../MiddelWares/Auth';
import { AddProduct, UpadateProduct } from '../Requests/ProductRequest';
import requestValidate from '../MiddelWares/RequestValidate';
const router = Router()

router.get('/', verifyToken, ProductController.getAllProducts);

router.get('/:cat_id', verifyToken, ProductController.getProductsByCategory);

router.post('/', verifyToken, requestValidate(AddProduct), ProductController.addProduct);

router.put('/:id', verifyToken, requestValidate(UpadateProduct), ProductController.updateProduct);

router.delete('/:id', verifyToken, ProductController.deleteProduct);

export default router