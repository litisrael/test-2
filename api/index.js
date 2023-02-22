import express from "express";
import { createCustomerRoute } from "./client.js";
import { initDB } from "../db/index.js";

export async function createServer() {
  const db = await initDB()
  const clientRoute = createCustomerRoute(db);
  
  const app = express();
   app.use(express.json())
  app.use("/client", clientRoute)



    app.listen(8080, () => {
        console.log("listening")
    })
}
