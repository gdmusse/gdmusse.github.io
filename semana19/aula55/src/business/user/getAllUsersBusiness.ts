import { getTokenData } from "../../services/authenticator";
import { getAllUsers } from "../../data/user/getAllUsers";

export const getAllUsersBusiness = async (token: string) => {
  getTokenData(token);

  return await getAllUsers();
};
