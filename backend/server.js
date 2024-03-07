import dotenv from "dotenv";
import express from "express";
import products from "./data/products.js";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.get("/", (_, res) => {
  res.send("Api testing server is running");
});

app.get("/api/products", (_, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
