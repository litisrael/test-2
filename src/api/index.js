import express from "express";
import { createCustomerRoute } from "./client.js";
import { initDB } from "../db/index.js";
import { createProductRoute } from "./product.js";
import { createSapakRoute } from "./sapak.js";

export async function createServer() {
  const db = await initDB();
  const productRoute = createProductRoute(db);
  const clientRoute = createCustomerRoute(db);
  const sapakRoute = createSapakRoute(db);
  const app = express();
  app.use(express.json());
  app.use("/client", clientRoute);
  app.use("/product", productRoute);
  app.use("/sapak", sapakRoute)

  app.listen(8080, () => {
    console.log("listening");
  });
}
