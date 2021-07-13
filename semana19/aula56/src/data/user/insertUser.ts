import { connection } from "../connection";
import { User } from "../../model/user";

export const insertUser = async(
   user: User
) => {
   await connection.insert(user).into('Users_Aula56')
}