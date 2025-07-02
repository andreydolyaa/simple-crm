import { type Request, type Response } from "express";
import * as customerService from "../services/customer.service.ts";

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await customerService.getCustomers();
    res.status(200).json({ type: "customers", data: customers });
  } catch (error) {
    res.status(400).json({ type: "error", error });
  }
};

export const getCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await customerService.getCustomer(req.params.id);
    res.status(200).json({ type: "customer", data: customer });
  } catch (error) {
    res.status(400).json({ type: "error", error });
  }
};

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const newCustomer = await customerService.createCustomer(req.body);
    res.status(200).json({ type: "customer", data: newCustomer });
  } catch (error) {
    res.status(400).json({ type: "error", error });
  }
};

export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const updatedCustomer = await customerService.updateCustomer(
      req.params.id,
      req.body
    );
    res.status(200).json({ type: "customer", data: updatedCustomer });
  } catch (error) {
    res.status(400).json({ type: "error", error });
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    await customerService.deleteCustomer(req.params.id);
    res.status(200).json({ type: "customer", data: "customer deleted" });
  } catch (error) {
    res.status(400).json({ type: "error", error });
  }
};
