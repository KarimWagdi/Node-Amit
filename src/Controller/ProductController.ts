import { Response } from "express";
import { AppDataSource } from "../dbConfig/data-source";

class ProductController {

    static getAllProducts =  async ( request: any, response: Response ): Promise<void> => {
        try{
        const productRepository = AppDataSource.getRepository("product");
        const products = await productRepository.find();
        response.json(products);
        } catch(error){
            response.status(500).json({ message: error });
        }
    };

    static getProductsByCategory =   async ( request: any, response: Response ): Promise<void> => {
        try{
        const productRepository = AppDataSource.getRepository("product");
        const product = await productRepository.findBy({cat_id: request.params.cat_id});
        response.json(product);
        } catch(error){
            response.status(500).json({ message: error });
        }
    };

    static addProduct =  async ( request: any, response: Response ): Promise<void> => {
        try{
            const productRepository = AppDataSource.getRepository("product");
            const savedProduct = await productRepository.save(request.body);
            response.send(savedProduct);
        } catch(error){
            response.status(500).json({ message: error });
        }
    };

    static updateProduct =  async ( request: any, response: Response ): Promise<void> => {
        try{
        const productRepository = AppDataSource.getRepository("product");
        const product = await productRepository.findOneBy({id: request.params.id})
        if (!product) 
            response.status(404).json("product doesnt exist");
        const updatedProduct = await productRepository.save({...product, ...request.body});
        response.json(updatedProduct);
        } catch(error){
            response.status(500).json({ message: error });
        }
    };
    
    static deleteProduct =  async ( request: any, response: Response ): Promise<void> => {
        try{
        const productRepository = AppDataSource.getRepository("product");
        const product = await productRepository.findOneBy({id: request.params.id});
        if(!product)
            response.status(404).json("product doesnt exist");
        await productRepository.delete({id: request.params.id});
        response.json({ message: "Product deleted successfully." });
        } catch(error){
            response.status(500).json({ message: error });
        }
    };
}

export default ProductController;