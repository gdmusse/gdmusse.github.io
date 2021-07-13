import { getTokenData } from "../../services/authenticator";
import { deleteUser } from "../../data/user/deleteUser";
import { selectUserById } from "../../data/user/selectUserById";
import { user } from "../../model/user";

export const deleteBusiness = async (id: string, token: string) => {
  const verifiedToken = getTokenData(token);
  
  console.log("id", id)
  const user: user = await selectUserById(id);
  console.log("user", user);

  if (verifiedToken.role !== "ADMIN") {
    throw new Error("Only admins can delete users.");
  }
  return await deleteUser(id);
};
