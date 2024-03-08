import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();

const PORT = process.env.PORT;

connectDB();

const app = express();

app.get("/", (_, res) => {
  res.send("Api testing server is running ...");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
