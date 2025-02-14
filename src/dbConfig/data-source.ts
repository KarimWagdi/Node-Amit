import "reflect-metadata";
import { DataSource } from "typeorm"; 
import { User } from "../entity/User";

import { Terms } from "../entity/Terms";

import { Product } from "../entity/Product";

import { Categories } from "../entity/Categories";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306, 
  username: "root",
  password: "A123456a#",
  database: "market",
  synchronize: true, 
  logging: true,
  entities: [User, Product, Categories, Terms], 

  migrations: [],
  subscribers: [],
});

// Initialize the connection
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err: Error) => {
    console.error("Error during Data Source initialization");
  });
