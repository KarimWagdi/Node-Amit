
import { Router } from "express";
import UserRoute from "./UserRoute";
import WalletRoute from "./WalletRoute";
import ProductRoute from './ProductRoute';
import ProductRateRoute from './ProductRateRoute';
import TermsRoute from "./TermsRoute";
import CategoriesRoute from "./CategoriesRoute";
import CartRoute from "./CartRoute";
import CartItemRoute from "./CartItemRoute";
const router = Router()

// routes

router.use("/users", UserRoute);
router.use("/wallets", WalletRoute);
router.use("/products", ProductRoute);
router.use("/product-rates", ProductRateRoute);
router.use('/terms', TermsRoute);
router.use('/Categories', CategoriesRoute)
router.use("/cart", CartRoute);
router.use("/cart-items", CartItemRoute);

export default router
