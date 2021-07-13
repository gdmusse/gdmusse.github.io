import { compare } from "../../services/hashManager"
import { selectUserByEmail } from "../../data/user/selectUserByEmail"
import { generateToken } from "../../services/authenticator"
import { user } from "../../model/user"

export const loginBusiness = async (
   email: string,
   password: string
) => {
   if (!email || !password) {
      throw new Error("'email' and 'password' are required")
   }

   const user: user = await selectUserByEmail(email)

   if (!user) {
      throw new Error("User not found")
   }

   const passwordIsCorrect: boolean = await compare(password, user.password)

   if (!passwordIsCorrect) {
      throw new Error("Incorrect password")
   }

   const token: string = generateToken({
      id: user.id,
      role: user.role
   })

   return token
}