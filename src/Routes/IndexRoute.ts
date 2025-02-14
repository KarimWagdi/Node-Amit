import { Router } from "express";
import UserRoute from "./UserRoute";
import WalletRoute from "./WalletRoute";
const router = Router();

// routes

router.use("/users", UserRoute);
router.use("/wallets", WalletRoute);
export default router;
