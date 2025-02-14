import { Router } from 'express'
import UserRoute from './UserRoute'
const router = Router()

// routes

router.use('/users', UserRoute)
export default router