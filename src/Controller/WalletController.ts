import { Response } from "express";
import { AppDataSource } from "../dbConfig/data-source";

export default class WalletController {
  static async getWallet(request: any, response: Response): Promise<void> {
    try {
      const walletRepo = AppDataSource.getRepository("wallet");
      const wallets = await walletRepo.find({ relations: ["user"] });
      response.status(200).json(wallets);
    } catch (error) {
      response.status(404).json({ message: error });
    }
  }

  static async getWalletById(request: any, response: Response): Promise<void> {
    try {
      const walletRepo = AppDataSource.getRepository("wallet");
      const wallet = await walletRepo.findOne({
        where: { id: request.params.id },
        relations: ["user"],
      });
      response.status(200).json(wallet);
    } catch (error) {
      response.status(404).json({ message: error });
    }
  }

  static async createWallet(request: any, response: Response): Promise<void> {
    try {
      const walletRepo = AppDataSource.getRepository("wallet");
      const wallet = await walletRepo.save(request.body);
      response.json(wallet);
    } catch (error) {
      response.status(500).json({ message: error });
    }
  }

  static async updateWallet(request: any, response: Response): Promise<void> {
    try {
      const walletRepo = AppDataSource.getRepository("wallet");
      const wallet = await walletRepo.findOne({
        where: { id: request.params.id },
      });
      if (wallet) {
        const updatedWallet = await walletRepo.save({
          ...wallet,
          ...request.body,
        });
        response.json(updatedWallet);
      } else {
        response.status(404).json({ message: "Wallet not found" });
      }
    } catch (error) {
      response.status(404).json({ message: error });
    }
  }

  //   static async deleteWallet(request: any, response: Response): Promise<void> {
  //     try {
  //       const walletRepo = AppDataSource.getRepository("wallet");
  //       const wallet = await walletRepo.findOne({
  //         where: { id: request.params.id },
  //         relations: ["user"],
  //       });
  //       if (wallet) {
  //         const deletedWallet = await wallet.remove();
  //         response.status(200).json(deletedWallet);
  //       } else {
  //         response.status(404).json({ message: "Wallet not found" });
  //       }
  //     } catch (error) {}
  //   }
}
