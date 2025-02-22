import { Response } from "express";
import bcrypt from "bcrypt";
import { AppDataSource } from "../dbConfig/data-source";
import { User } from "../entity/User";
const jwt = require('jsonwebtoken');

class UserController {

    static getUser =  async ( request: any, response: Response ): Promise<void> => {
        try{
        const userRepository = AppDataSource.getRepository("user");
        const users = await userRepository.find();
        response.json(users);
        } catch(error){
            response.status(500).json({ message: error });
        }
    };

    static addUser =  async ( request: any, response: Response ): Promise<void> => {
        try{
            const userRepository = AppDataSource.getRepository("user");
            const walletRepository = AppDataSource.getRepository("wallet");
            const cartRepository = AppDataSource.getRepository("cart");
            const hashedPassword = await bcrypt.hash(request.body.password, 10);
            request.body.password = hashedPassword;
            const savedUser = await userRepository.save(request.body);
            await walletRepository.save({ user_id: savedUser.id });
            await cartRepository.save({ user_id: savedUser.id });
            const token = jwt.sign({ userId: savedUser.id }, process.env.jwtSecret, { expiresIn: '1h' });
            // await userRepository.update(savedUser.id, {token: token});
            response.send({accessToken: token, user: savedUser});
        } catch(error){
            console.log(error);
            response.status(500).json({ error });
        }
    };

    static updateUser =  async ( request: any, response: Response ): Promise<void> => {
        try{
        const userRepository = AppDataSource.getRepository("user");
        const user = await userRepository.findOne(request.params.id)
        const updatedUser = await userRepository.save(request.body);
        response.json(updatedUser);
        } catch(error){
            response.status(500).json({ message: error });
        }
    };
    
    static deleteUser =  async ( request: any, response: Response ): Promise<void> => {
        try{
        const userRepository = AppDataSource.getRepository("user");
        await userRepository.delete(request.body);
        response.json({ message: "User deleted successfully." });
        } catch(error){
            response.status(500).json({ message: error });
        }
    };

    static loginUser =  async ( request: any, response: Response ): Promise<any> => {
        try{
            const userRepository = AppDataSource.getRepository("user");
            const user = await userRepository.findOne({where: {email: request.body.email}});
            if(!user){
                return response.status(401).json({ message: "Invalid email." });
            }
            const isValid = await bcrypt.compare(request.body.password, user.password);
            if(!isValid){
                return response.status(401).json({ message: "Invalid password." });
            }
            const token = jwt.sign({ userId: user.id }, process.env.jwtSecret, { expiresIn: '1h' });
            response.json({ token: token, message: "Logged in successfully."});
        } catch(error){
            response.status(500).json({ message: error});
        }
    };

}

export default UserController;