import express from "express";
import * as taskController from "../controllers/task.controller.ts";

const router = express.Router();

router
  .get("/tasks", taskController.getTasks)
  .get("/tasks/:id", taskController.getTask)
  .post("/tasks", taskController.createTask)
  .put("/tasks/:id", taskController.updateTask)
  .delete("/tasks/:id", taskController.deleteTask);

export default router;
