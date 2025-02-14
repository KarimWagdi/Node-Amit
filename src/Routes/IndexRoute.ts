import { Router } from 'express'
import UserRoute from './UserRoute'
import CategoriesRoute from './CategoriesRoute'
const router = Router()

// routes

router.use('/users', UserRoute)
router.use('/categories', CategoriesRoute)
export default router