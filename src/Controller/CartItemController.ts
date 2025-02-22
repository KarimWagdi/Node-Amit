import { Response } from "express";
import { AppDataSource } from "../dbConfig/data-source";
import { Product } from "../entity/Product";

class CartItemController {

    static getCartItem =  async ( request: any, response: Response ): Promise<void> => {
        try{
            console.log(request.user);
            const CartItemRepository = AppDataSource.getRepository("cart_items");
            const Cart = await CartItemRepository.find();
            response.json(Cart);
        } catch(error){
            response.status(500).json({ message: error });
        }
    };
    
    static addCartItem =  async ( request: any, response: Response ): Promise<void> => {
        // try{
        
        //     }
        // } catch(error){
        //     response.status(500).json({ message: error });
        // }
    };

    static decrease =  async ( request: any, response: Response ): Promise<void> => {
        // try{
        
        //     }
        // } catch(error){
        //     response.status(500).json({ message: error });
        // }
    };
    
    static deleteCartItem =  async ( request: any, response: Response ): Promise<void> => {
        try{
        const CartItemRepository = AppDataSource.getRepository("cart_items");
        await CartItemRepository.delete(request.params.id);
        response.json({ message: "Cart deleted successfully." });
        } catch(error){
            response.status(500).json({ message: error });
        }
    };
}

export default CartItemController;