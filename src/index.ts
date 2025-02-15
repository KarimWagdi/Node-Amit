import express from "express";
import Routers from './Routes/IndexRoute'

const app = express();
const PORT = 5000;

app.use(express.json());


app.use('/api', Routers)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
