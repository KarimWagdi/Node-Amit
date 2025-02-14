import { Router } from 'express'
import ProductController from '../Controller/ProductController'
const router = Router()

router.get('/', ProductController.getAllProducts);

router.get('/:cat_id', ProductController.getProductsByCategory);


//auth req
router.post('/', ProductController.addProduct);

//auth req
router.put('/:id', ProductController.updateProduct);

// //auth req
router.delete('/:id', ProductController.deleteProduct);

export default router