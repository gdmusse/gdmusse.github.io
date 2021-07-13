import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { userCredentials } from "../types";
import { compare } from "../services/hashManager";

export default async function login(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password }: userCredentials = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("'email' and 'password' are required");
    }

    const [user] = await connection("Cookenu_User").where({ email });

    if (!user) {
      res.statusCode = 401;
      throw new Error("Invalid email");
    }
    const hashCompare = await compare(password, user.password);

    if (!hashCompare) {
      res.statusCode = 401;
      throw new Error("Invalid credentials");
    }

    const access_token: string = generateToken({ id: user.id });

    res.send({ access_token });
  } catch (error) {
    if (res.statusCode == 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
}
