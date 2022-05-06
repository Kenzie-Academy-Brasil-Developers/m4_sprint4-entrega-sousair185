import express from "express";
import "dotenv/config";
import produtctsRouter from "./routers/products.routes";
import categoriesRouter from "./routers/categories.routes";
import { startDatabase } from "./database";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", produtctsRouter);

export default app.listen(process.env.PORT || 3333, () => {
  console.log("Server running");
  startDatabase();
});
