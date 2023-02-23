import express from "express";

export function createProductRoute(db) {
  const router = express.Router();

  router.get('/',(req, res)=> {
   
    res.send("somos campeones 😁😁😁😁")
    
    })
    router.post("/", async (req, res) => {
      try {
        const product = req.body;
        const result = await db.product.insert(product)
        res.status(201).json({ status: "created", data: result });
      } catch (e) {
        res.status(400).json({ status: "invalid input" });
      }
    });
  return router;
}
