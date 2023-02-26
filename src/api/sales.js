import express from "express";


export function createSalesRoute(db) {
  const router = express.Router();

  router.get('/',(req, res)=> {
    console.log(req.params)
    res.send("somos campeones 😁😁😁😁")
    
    })
    router.post("/", async (req, res) => {
      try {
        const info = req.body;
        const result = await db.sales.insert(info);
        res.status(201).json({ status: "created", data: result });
      } catch (e) {
        res.status(400).json({ status: "invalid input" });
      }
    });
  return router;
}
