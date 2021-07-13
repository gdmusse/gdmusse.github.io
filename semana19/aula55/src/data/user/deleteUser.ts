import { connection } from "../connection";

export const deleteUser = async (id: string): Promise<void> => {
  try {
    await connection("Users_Aula55").del().where({ id });
  } catch (error) {
    throw new Error(error.slqMessage || error.message);
  }
};
