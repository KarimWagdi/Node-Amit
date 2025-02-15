import { Router } from 'express';
import ProductRateController from '../Controller/ProductRateController';

const router = Router();


router.post('/', ProductRateController.addRating);

// Get ratings for a specific product
router.get('/products/:productId', ProductRateController.getRatingsByProduct);


router.put('/:id', ProductRateController.updateRating);

// Get average rating for a product
router.get('/average/:productId', ProductRateController.getAverageRating);


router.delete('/:id', ProductRateController.deleteRating);

export default router;
