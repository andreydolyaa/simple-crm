import express from "express";
import * as dealController from "../controllers/deal.controller.ts";

const router = express.Router();

router
  .get("/deals", dealController.getDeals)
  .get("/deals/:id", dealController.getDeal)
  .post("/deals", dealController.createDeal)
  .put("/deals/:id", dealController.updateDeal)
  .delete("/deals/:id", dealController.deleteDeal);

export default router;
