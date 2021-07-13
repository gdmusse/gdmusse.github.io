import { connection } from "../connection";
import { user } from "../../model/user";

export const getAllUsers = async (): Promise<user> => {
  try {
    const users: any = [];
    const result = await connection("Users_Aula55").select();
    for (let user of result) {
      users.push(user);
    }
    return users;
  } catch (error) {
    throw new Error(error.slqMessage || error.message);
  }
};
