import { hash } from "../../services/hashManager";
import { insertUser } from "../../data/user/insertUser";
import { userData } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";

export const signupBusiness = async (
   userData: userData
):Promise<string> => {
   if (
      !userData.name ||
      !userData.email ||
      !userData.password ||
      !userData.role
   ) {
      throw new Error("Please fill all the fields")
   }

  if(userData.email.indexOf("@") === -1){
      throw new Error("Invalid Email");
  }

  if(userData.password.length < 6){
      throw new Error("Password must have at least 6 characters");
  }

   const cypherPassword = await hash(userData.password);

   const newUser = {
      ...userData,
      password: cypherPassword,
      id: generateId()
   }

   await insertUser(newUser)

   const token: string = generateToken({
      id: newUser.id,
      role: userData.role
   })

   return token

}
