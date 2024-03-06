import express from "express";
import products from "./data/products.js";

const PORT = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/products", (req, res) => {
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
