import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData, userInfo } from "../types";

export default async function getOwnProfile(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const access_token = req.headers.authorization! as string;
    const tokenData: authenticationData | null = getTokenData(access_token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Unauthorized");
    }

    const user = await connection("Cookenu_User")
      .select()
      .where({ id: tokenData.id });

    const profileInfo: userInfo = {
      id: tokenData.id,
      name: user[0].name,
      email: user[0].email,
    };

    res.send(profileInfo);
  } catch (error) {
    res.send({ message: error.message });
  }
}
