import express from "express";

export function createSapakRoute (db){
    const router = express.Router()
    router.post("/", async (req, res) => {
        try {
          const sapak = req.body;
          const result = await db.sapak.insert(sapak);
          res.status(201).json({ status: "created", data: result });
        } catch (e) {
          res.status(400).json({ status: "invalid input" });
        }
        
      });
    return router;
  }
  
