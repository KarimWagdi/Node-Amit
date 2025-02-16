import { Response } from "express";
import { AppDataSource } from "../dbConfig/data-source";
import { UserRole } from "../entity/User";

class ProductController {

    static getAllProducts =  async ( request: any, response: Response ): Promise<void> => {
        try{
        const productRepository = AppDataSource.getRepository("product");
        const products = await productRepository.find();
        response.json(products);
        return;
        } catch(error){
            console.log(error);
            response.status(500).json({ message: error });
            return;
        }
    };

    static getProductsByCategory =   async ( request: any, response: Response ): Promise<void> => {
        try{
        const productRepository = AppDataSource.getRepository("product");
        const product = await productRepository.findBy({cat_id: request.params.cat_id});
        response.json(product);
        return;
        } catch(error){
            response.status(500).json({ message: error });
            return;
        }
    };

    static addProduct =  async ( request: any, response: Response ): Promise<void> => {
        try{
            const productRepository = AppDataSource.getRepository("product");
            const savedProduct = await productRepository.save(request.body);
            response.send(savedProduct);
            return;
        } catch(error){
            response.status(500).json({ message: error });
            return;
        }
    };

    static updateProduct =  async ( request: any, response: Response ): Promise<void> => {
        try{
        const productRepository = AppDataSource.getRepository("product");
        const product = await productRepository.findOne({where:{id: request.params.id}, relations:['user_id']})
        
        console.log(product?.user_id.id, request.user.id);
        if (!product) {
            response.status(404).json("product doesnt exist");
            return;
        }
        // console.log(request.user);
        if( product?.user_id.id !== request.user.id && request.user.role !== UserRole.ADMIN ) {
            response.status(403).json("Unauthorized access");
            return;
        }
        const updatedProduct = await productRepository.update({id:request.params.id}, request.body);
        response.json(updatedProduct);
        return;
        } catch(error){
            response.status(500).json({ message: error });
            return;
        }
    };
    
    static deleteProduct =  async ( request: any, response: Response ): Promise<void> => {
        try{
        const productRepository = AppDataSource.getRepository("product");
        const product = await productRepository.findOne({where:{id: request.params.id}, relations:['user_id']});
        if(!product)
        {
            response.status(404).json("product doesnt exist");
            return;
        }
        if (product?.user_id.id !== request.user.id && request.user.role !== UserRole.ADMIN) {
            response.status(403).json("Unauthorized access");
            return;
        }
        await productRepository.delete({id: request.params.id});
        response.json({ message: "Product deleted successfully." });
        return;
        } catch(error){
            response.status(500).json({ message: error });
            return;
        }
    };
}

export default ProductController;