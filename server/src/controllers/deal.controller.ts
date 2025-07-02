import { type Request, type Response } from "express";
import * as dealService from "../services/deal.service.ts";

export const getDeals = async (req: Request, res: Response) => {
  try {
    const deals = await dealService.getDeals();
    res.status(200).json({ type: "deals", data: deals });
  } catch (error) {
    res.status(400).json({ type: "error", error });
  }
};

export const getDeal = async (req: Request, res: Response) => {
  try {
    const deal = await dealService.getDeal(req.params.id);
    res.status(200).json({ type: "deal", data: deal });
  } catch (error) {
    res.status(400).json({ type: "error", error });
  }
};

export const createDeal = async (req: Request, res: Response) => {
  try {
    const newDeal = await dealService.createDeal(req.body);
    res.status(200).json({ type: "deal", data: newDeal });
  } catch (error) {
    res.status(400).json({ type: "error", error });
  }
};

export const updateDeal = async (req: Request, res: Response) => {
  try {
    const updatedDeal = await dealService.updateDeal(req.params.id, req.body);
    res.status(200).json({ type: "deal", data: updatedDeal });
  } catch (error) {
    res.status(400).json({ type: "error", error });
  }
};

export const deleteDeal = async (req: Request, res: Response) => {
  try {
    await dealService.deleteDeal(req.params.id);
    res.status(200).json({ type: "deal", data: "deal deleted" });
  } catch (error) {
    res.status(400).json({ type: "error", error });
  }
};
