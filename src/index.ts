import express from "express";
import Routers from './Routes/IndexRoute'
import multer from "multer";
import * as dotenv from "dotenv"

const app = express();
app.use(express.json());

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })

// const upload = multer({ storage: storage })


// app.post('/profile', upload.single('image'), function (req, res, next) {
//   console.log(req.body.image);
//   res.json("data");
// })
app.use('/api', Routers)

app.listen(process.env.APP_PORT, () => {
  
  console.log(`Server is running at http://localhost:${process.env.APP_PORT}`);
});
