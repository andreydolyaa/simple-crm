import express from "express";
import dealRoutes from "./deal.routes.ts";
import taskRoutes from "./task.routes.ts";
import userRoutes from "./user.routes.ts";
import customersRoutes from "./customer.routes.ts";

const router = express.Router();

router.use("/api", userRoutes, customersRoutes, dealRoutes, taskRoutes);

export default router;
