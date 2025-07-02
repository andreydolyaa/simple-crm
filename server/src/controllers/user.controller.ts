import type { Request, Response } from "express";
import * as userService from "../services/user.service.ts";

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUser(req.params.id);
    res.status(200).json({ type: "user", data: user });
  } catch (error) {
    res.status(400).json({ type: "error", error: (error as Error).message });
  }
};

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createNewUser(req.body);
    res.status(200).json({ type: "user", data: user });
  } catch (error) {
    res.status(400).json({ type: "error", error });
  }
};
