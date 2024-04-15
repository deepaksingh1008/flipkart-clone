import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { dbConnection } from "./src/shared/db/connection.js";
import userRouter from "./src/module/user/routes/userRoutes.js";
import categoryRouter from "./src/module/product/routes/CategoryRoute.js";
import productRouter from "./src/module/product/routes/productRoutes.js";
const app = express();
dotenv.config();
//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
//routes
app.use("/api/v1/", userRouter);
app.use("/api/v1/", categoryRouter);
app.use("/api/v1/", productRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on  port ${process.env.PORT}`);
  dbConnection();
});
