import { Router } from 'express'
import UserRoute from './UserRoute'
import CategoriesRoute from './CategoriesRoute'

import Terms from './TermsRoute'

const router = Router()

// routes

router.use('/users', UserRoute)

router.use('/categories', CategoriesRoute)

router.use('/terms', Terms)

export default router