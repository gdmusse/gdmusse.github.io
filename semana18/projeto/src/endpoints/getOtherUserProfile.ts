import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData, userInfo } from "../types";

export default async function getOtherUserProfile(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const access_token = req.headers.authorization! as string;
    const tokenData: authenticationData | null = getTokenData(access_token);
    const id = req.params.id;

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Unauthorized");
    }

    const user = await connection("Cookenu_User").select().where({ id });

    if (user.length === 0) {
      throw new Error("User not found.");
    }

    const profileInfo: userInfo = {
      id,
      name: user[0].name,
      email: user[0].email,
    };

    res.send(profileInfo);
  } catch (error) {
    res.send({ message: error.message });
  }
}
