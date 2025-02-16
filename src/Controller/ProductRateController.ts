import { Response } from "express";
import { AppDataSource } from "../dbConfig/data-source";

class ProductRateController {
  static addRating = async (
    request: any,
    response: Response
  ): Promise<void> => {
    try {
      const rateRepository = AppDataSource.getRepository("rate");
      const rateRequest = request.body;
      const existingRating = await rateRepository.findOne();
      if (!existingRating) {
        // const newRating = rateRepository.create(rateRequest);
        const savedRating = await rateRepository.save(rateRequest);
        response.status(201).json(savedRating);
      }else{
        response.status(400).json({message: 'You have already rated this product'});
      }

    } catch (error) {
      response.status(500).json({ message: error });
    }
  };

  static getRatingsByProduct = async (
    request: any,
    response: Response
  ): Promise<void> => {
    try {
      const rateRepository = AppDataSource.getRepository("rate");
      const ratings = await rateRepository.find({
        where: { product: { id: request.params.productId } },
        relations: ["product"],
      });
      response.json(ratings);
    } catch (error) {
      response.status(500).json({ message: error });
    }
  };

  static updateRating = async (
    request: any,
    response: Response
  ): Promise<void> => {
    try {
      const rateRepository = AppDataSource.getRepository("rate");
      const rating = await rateRepository.findOneBy({
        id: request.params.id,
      });
      if (!rating) {
        response.status(404).json("Rating not found");
        return;
      }
      const updatedRating = await rateRepository.save({
        ...rating,
        ...request.body,
      });
      response.json(updatedRating);
    } catch (error) {
      response.status(500).json({ message: error });
    }
  };

  static getAverageRating = async (
    request: any,
    response: Response
  ): Promise<void> => {
    try {
      const rateRepository = AppDataSource.getRepository("rate");
      const result = await rateRepository
        .createQueryBuilder("rate")
        .select("AVG(rate.value)", "average")
        .where("rate.productId = :productId", {
          productId: request.params.productId,
        })
        .getRawOne();
      response.json({ average: parseFloat(result.average) || 0 });
    } catch (error) {
      response.status(500).json({ message: error });
    }
  };

  static deleteRating = async (
    request: any,
    response: Response
  ): Promise<void> => {
    try {
      const rateRepository = AppDataSource.getRepository("rate");
      const rating = await rateRepository.findOneBy({
        id: request.params.id,
      });
      if (!rating) {
        response.status(404).json("Rating not found");
        return;
      }
      await rateRepository.delete({ id: request.params.id });
      response.json({ message: "Rating deleted successfully." });
    } catch (error) {
      response.status(500).json({ message: error });
    }
  };
}

export default ProductRateController;
