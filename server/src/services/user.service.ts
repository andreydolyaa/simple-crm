import { User, type UserInterface } from "../models/user.model.ts";
import { hashPassword } from "./auth.service.ts";

export const createNewUser = async (data: UserInterface) => {
  data.password = await hashPassword(data.password);
  return await User.create(data);
};


// TODO: CREATE ANTI-FUZZING IN ERROR MESSAGE
export const getUser = async (id: string) => {
  const user = await User.findOne({ id });
  if (!user) throw new Error("user not found");
  return user;
};
