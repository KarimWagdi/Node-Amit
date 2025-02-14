import { Router } from 'express'
import UserRoute from './UserRoute'
import Terms from './TermsRoute'
const router = Router()

// routes

router.use('/users', UserRoute)
router.use('/terms', Terms)
export default router