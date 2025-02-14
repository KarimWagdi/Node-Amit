// controllers/CategoriesController.ts
import { Response } from "express";
import { AppDataSource } from "../dbConfig/data-source";
import { Categories } from "../entity/Categories";

class CategoriesController {

    static getCategories = async (request: any, response: Response): Promise<void> => {
        try {
            const categoryRepository = AppDataSource.getRepository(Categories);
            const categories = await categoryRepository.find();
            response.json(categories);
        } catch (error) {
            response.status(500).json({ message: error });
        }
    };

    static addCategory = async (request: any, response: Response): Promise<void> => {
        try {
            const categoryRepository = AppDataSource.getRepository(Categories);
            const newCategory = categoryRepository.create(request.body);
            const savedCategory = await categoryRepository.save(newCategory);
            response.status(201).json(savedCategory);
        } catch (error) {
            response.status(500).json({ message: error });
        }
    };

    static updateCategory = async (request: any, response: Response): Promise<void> => {
        try {
            const categoryRepository = AppDataSource.getRepository(Categories);
            const category = await categoryRepository.findOneBy({ id: Number(request.params.id) });
            if (!category) {
                response.status(404).json({ message: "Category not found." });
            }
            const updatedCategory = await categoryRepository.save({ ...category, ...request.body });
            response.json(updatedCategory);
        } catch (error) {
            response.status(500).json({ message: error });
        }
    };

    static deleteCategory = async (request: any, response: Response): Promise<void> => {
        try {
            const categoryRepository = AppDataSource.getRepository(Categories);
            const result = await categoryRepository.delete(request.params.id);
            if (result.affected === 0) {
                response.status(404).json({ message: "Category not found." });
            }
            response.json({ message: "Category deleted successfully." });
        } catch (error) {
            response.status(500).json({ message: error });
        }
    };
}

export default CategoriesController;