
import { Router } from "express";
import UserRoute from "./UserRoute";
import WalletRoute from "./WalletRoute";
import ProductRoute from './ProductRoute'
const router = Router()

// routes

router.use("/users", UserRoute);
router.use("/wallets", WalletRoute);


router.use('/products', ProductRoute)
export default router

