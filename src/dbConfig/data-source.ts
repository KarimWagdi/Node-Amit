import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/User";
import { Product } from "../entity/Product";
import { Wallet } from "../entity/Wallet";
import * as dotenv from "dotenv";
import { Terms } from "../entity/Terms";
import { Categories } from "../entity/Categories";
import { Rate } from "../entity/Rate";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User, Product, Wallet, Terms, Categories, Rate],
  migrations: [],
  subscribers: [],
});

// Initialize the connection
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err: Error) => {
    console.error("Error during Data Source initialization" + err);
  });
