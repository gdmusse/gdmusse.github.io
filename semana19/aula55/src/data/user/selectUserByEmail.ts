import { connection } from "../connection"
import { user } from "../../model/user"

export const selectUserByEmail = async (
   email: string
): Promise<user> => {
   try {
      const result = await connection("Users_Aula55")
         .select("*")
         .where({ email })

      return {
         id: result[0].id,
         name: result[0].name,
         email: result[0].email,
         password: result[0].password,
         role: result[0].role
      }

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}