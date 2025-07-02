import { Customer, type CustomerInterface } from "../models/customer.model.ts";

export const getCustomers = async () => {
  return await Customer.find({});
};

export const getCustomer = async (id: string) => {
  return await Customer.findOne({ id });
};

export const createCustomer = async (data: CustomerInterface) => {
  return await Customer.create(data);
};

export const updateCustomer = async (
  id: string,
  data: Partial<CustomerInterface>
) => {
  return await Customer.findOneAndUpdate({ id }, data, { new: true });
};

export const deleteCustomer = async (id: string) => {
  return await Customer.findOneAndDelete({ id });
};
