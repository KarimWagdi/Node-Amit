import { Router } from 'express';
import ProductRateController from '../Controller/ProductRateController';
import requestValidate from '../MiddelWares/RequestValidate';
import { AddProductRate, UpdateProductRate } from '../Request/ProductRateRequest';
import verifyToken from '../MiddelWares/Auth';

const router = Router();


router.post('/', verifyToken, requestValidate(AddProductRate), ProductRateController.addRating);

// Get ratings for a specific product
router.get('/products/:productId', verifyToken, ProductRateController.getRatingsByProduct);


router.put('/:id', verifyToken, requestValidate(UpdateProductRate), ProductRateController.updateRating);

// Get average rating for a product
router.get('/average/:productId',verifyToken,  ProductRateController.getAverageRating);


router.delete('/:id',verifyToken, ProductRateController.deleteRating);

export default router;
