
import { Router } from "express";
import UserRoute from "./UserRoute";
import WalletRoute from "./WalletRoute";
import ProductRoute from './ProductRoute';
import ProductRateRoute from './ProductRateRoute';
import TermsRoute from "./TermsRoute";
import CategoriesRoute from "./CategoriesRoute";
const router = Router()

// routes

router.use("/users", UserRoute);
router.use("/wallets", WalletRoute);
router.use("/products", ProductRoute);
router.use("/product-rates", ProductRateRoute);
router.use('/terms', TermsRoute);
router.use('/Categories', CategoriesRoute)

export default router
