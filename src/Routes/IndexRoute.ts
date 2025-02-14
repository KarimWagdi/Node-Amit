import { Router } from 'express'
import UserRoute from './UserRoute'
import ProductRoute from './ProductRoute'
const router = Router()

// routes

router.use('/users', UserRoute)
router.use('/products', ProductRoute)
export default router