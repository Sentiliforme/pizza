import express from "express";
import cors from "cors";
import * as Database from "./service/Database";
import { getCategory } from "./controller/category";
import categoryRouter from "./api/category";
import "reflect-metadata";

const app = express();
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

app.use("/category", categoryRouter);

/*
app.get("/category/:categoryId/product", (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const foundProducts = products.filter(
    (prod) => prod.categoryId === categoryId
  );
  res.send(foundProducts);
});

app.get("/product", (req, res) => {
  res.send(products);
});
*/

app.get("/*", (req, res) => {
  res.status(404).send({
    error: "Ruta no encontrada",
  });
});

Database.init()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error al inicializar DB:");
    console.error(err);
  });
