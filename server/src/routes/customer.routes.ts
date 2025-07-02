import express from "express";
import * as customerController from "../controllers/customer.controller.ts";

const router = express.Router();

router
  .get("/customers", customerController.getCustomers)
  .get("/customers/:id", customerController.getCustomer)
  .post("/customers", customerController.createCustomer)
  .put("/customers/:id",customerController.updateCustomer)
  .delete("/customers/:id", customerController.deleteCustomer);

export default router;
