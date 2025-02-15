import express from "express";
import Routers from './Routes/IndexRoute'
import * as dotenv from "dotenv";
const app = express();

app.use(express.json());


app.use('/api', Routers)

app.listen(process.env.APP_PORT, () => {
  
  console.log(`Server is running at http://localhost:${process.env.APP_PORT}`);
});
