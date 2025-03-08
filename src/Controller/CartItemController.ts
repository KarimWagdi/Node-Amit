import { response, Response } from "express";
import { AppDataSource } from "../dbConfig/data-source";
import { Product } from "../entity/Product";
import { request } from "http";

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
        try{
            const cartItemRepository = AppDataSource.getRepository("cart_items");
            const cartRepository = AppDataSource.getRepository("cart");
            const productRepository = AppDataSource.getRepository("product");
            const userCart = await cartRepository.findOne({where:{user_id:{id: request.user.id}}})
            console.log(request.user.id);
            console.log(userCart);
            const product = await productRepository.findOne({where:{id: request.body.product_id}})
            const isExist = await cartItemRepository.findOne({where:{cart_id:{id: userCart?.id}, product_id:{id: request.body.product_id}}}) 
            console.log(isExist);
            if (!isExist){
                const cartData = await cartItemRepository.save({product_id: request.body.product_id, cart_id: userCart?.id, total_item_price: product?.price, quantity: 1});
                response.json(cartData);
                return
            }else{
                const obj = {
                    product_id: product?.id, 
                    cart_id: userCart?.id,
                    quantity: +isExist.quantity + 1,
                    total_item_price: (+isExist.quantity + 1) * product?.price
                }
                await cartItemRepository.update({id: isExist.id}, obj);
                const updatedCartData = await cartItemRepository.findOne({where:{id: isExist.id}})
                response.json(updatedCartData);
                return
            }
        } catch(error){
            response.status(500).json({ message: error });
        }
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