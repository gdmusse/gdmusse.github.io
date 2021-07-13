import { Request, Response } from "express"
import { getAllUsersBusiness } from "../../business/user/getAllUsersBusiness";
import { loginBusiness } from "../../business/user/loginBusiness"

export const getAll = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
     
    const token = req.headers.authorization!;
    const users = await getAllUsersBusiness(token);

    res.send(users).status(200);

   } catch (error) {
      res.status(400).send(error.message)
   }
}