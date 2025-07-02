import express from "express";
import * as userController from "../controllers/user.controller.ts";

const router = express.Router();

router
  .get("/users/:id", userController.getUser)
  .post("/users", userController.createNewUser);

export default router;
