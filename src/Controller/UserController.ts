import { Response } from "express";
import bcrypt from "bcrypt";
import { AppDataSource } from "../dbConfig/data-source";
import { User } from "../entity/User";
const jwt = require("jsonwebtoken");

const jwtSecret = "your-secret-key";

class UserController {
  static getUser = async (request: any, response: Response): Promise<void> => {
    try {
      const userRepository = AppDataSource.getRepository("user");
      const users = await userRepository.find();
      response.json(users);
    } catch (error) {
      response.status(500).json({ message: (error as Error).message });
    }
  };

  static addUser = async (request: any, response: Response): Promise<void> => {
    try {
      const userRepository = AppDataSource.getRepository("user");
      const hashedPassword = await bcrypt.hash(request.body.password, 10);
      request.body.password = hashedPassword;
      const savedUser = await userRepository.save(request.body);
      const token = jwt.sign({ userId: savedUser.id }, jwtSecret, {
        expiresIn: "1h",
      });
      response.send({ accessToken: token, user: savedUser });
    } catch (error) {
      response.status(500).json({ message: (error as Error).message });
    }
  };

  static updateUser = async (
    request: any,
    response: Response
  ): Promise<void> => {
    try {
      const userRepository = AppDataSource.getRepository("user");
      const user = await userRepository.findOne({
        where: { id: request.params.id },
      });
      if (!user) {
        response.status(404).send("User not found");
        return;
      }
      const updatedUser = await userRepository.save({
        ...user,
        ...request.body,
      });
      response.status(203).json(updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
      response.status(500).json({ message: (error as Error).message });
    }
  };

  static deleteUser = async (
    request: any,
    response: Response
  ): Promise<void> => {
    try {
      const userRepository = AppDataSource.getRepository("user");
      const user = await userRepository.findOne({
        where: { id: request.params.id },
      });
      if (!user) {
        response.status(404).send("User not found");
        return;
      }
      await userRepository.softDelete({ id: request.params.id });
      response.json({ message: "User deleted successfully." });
    } catch (error) {
      response.status(500).json({ message: (error as Error).message });
    }
  };

  static loginUser = async (request: any, response: Response): Promise<any> => {
    try {
      const userRepository = AppDataSource.getRepository("user");
      const user = await userRepository.findOne({
        where: { email: request.body.email },
      });
      if (!user) {
        return response.status(401).json({ message: "Invalid email." });
      }
      const isValid = await bcrypt.compare(
        request.body.password,
        user.password
      );
      if (!isValid) {
        return response.status(401).json({ message: "Invalid password." });
      }
      const token = jwt.sign({ userId: user.id }, jwtSecret, {
        expiresIn: "1h",
      });
      response.json({ token: token, message: "Logged in successfully." });
    } catch (error) {
      response.status(500).json({ message: (error as Error).message });
    }
  };
}

export default UserController;
