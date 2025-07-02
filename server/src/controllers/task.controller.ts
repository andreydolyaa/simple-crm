import { type Request, type Response } from "express";
import * as taskService from "../services/task.service.ts";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.getTasks();
    res.status(200).send({ type: "tasks", data: tasks });
  } catch (error) {
    res.status(400).send({ type: "error", error });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const task = await taskService.getTask(req.params.id);
    res.status(200).send({ type: "task", data: task });
  } catch (error) {
    res.status(400).send({ type: "error", error });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const newTask = await taskService.createTask(req.body);
    res.status(200).send({ type: "task", data: newTask });
  } catch (error) {
    res.status(400).send({ type: "error", error });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const updatedTask = await taskService.updateTask(req.params.id, req.body);
    res.status(200).send({ type: "task", data: updatedTask });
  } catch (error) {
    res.status(400).send({ type: "error", error });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    await taskService.deleteTask(req.params.id);
    res.status(200).send({ type: "task", data: "task deleted" });
  } catch (error) {
    res.status(400).send({ type: "error", error });
  }
};
