import express from "express";


export function createCustomerRoute(db) {
  const router = express.Router();

  router.get('/',(req, res)=> {
    console.log(req.params)
    res.send("somos campeones 😁😁😁😁")
    
    })
    router.post("/", async (req, res) => {
      try {
        const costumer = req.body;
        const result = await db.client.insert(costumer);
        res.status(201).json({ status: "created", data: result });
      } catch (e) {
        res.status(400).json({ status: "invalid input" });
      }
    });
  return router;
}
