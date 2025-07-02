import { Task, type TaskInterface } from "../models/task.model.ts";

export const getTasks = async () => {
  return await Task.find({});
};

export const getTask = async (id: string) => {
  return await Task.findOne({ id });
};

export const createTask = async (data: TaskInterface) => {
  return await Task.create(data);
};

export const updateTask = async (id: string, data: Partial<TaskInterface>) => {
  return await Task.findOneAndUpdate({ id }, data, { new: true });
};

export const deleteTask = async (id: string) => {
  return await Task.findOneAndDelete({ id });
};
