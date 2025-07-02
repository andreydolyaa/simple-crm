import { Deal, type DealInterface } from "../models/deal.model.ts";

export const getDeals = async () => {
  return await Deal.find({});
};

export const getDeal = async (id: string) => {
  return await Deal.findOne({ id });
};

export const createDeal = async (data: DealInterface) => {
  return await Deal.create(data);
};

export const updateDeal = async (
  id: string,
  data: Partial<DealInterface>
) => {
  return await Deal.findOneAndUpdate({ id }, data, { new: true });
};

export const deleteDeal = async (id: string) => {
  return await Deal.findOneAndDelete({ id });
};
