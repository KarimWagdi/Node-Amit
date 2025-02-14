import { Router } from "express";
import verifyToken from "../MiddelWares/Auth";
import WalletController from "../Controller/WalletController";

const router = Router();

router.get("/", WalletController.getWallet);
router.get("/:id", WalletController.getWalletById);
router.post("/", WalletController.createWallet);
router.put("/:id", WalletController.updateWallet);

export default router;
