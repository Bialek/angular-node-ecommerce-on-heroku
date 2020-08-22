const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

const { iterate } = require("jsoncrement");

app.use(express.static("client/build"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app
  .get("/products", (req, res) => {
    const products = db.get("products");
    res.send(products);
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

app.post("/add-product", (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "New product data can not be empty",
    });
  }
  try {
    const productsCollection = db.get("products");
    const newProduct = iterate(productsCollection.value(), "id", req.body);

    productsCollection.push(newProduct).write();
    return res.status(200).send({
      message: "New product created",
    });
  } catch {
    return res.status(500).send({
      message: "Server error",
    });
  }
});

app.delete("/remove-product", (req, res) => {
  if (!req.query.id) {
    return res.status(400).send({
      message: "Remove product id can not be empty",
    });
  }
  try {
    db.get("products")
      .remove({ id: parseInt(req.query.id) })
      .write();

    return res.status(200).send({
      message: "Product was removed",
    });
  } catch {
    return res.status(500).send({
      message: "Server error",
    });
  }
});
