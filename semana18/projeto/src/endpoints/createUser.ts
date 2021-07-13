import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { user, userSignUpInfo } from "../types";
import { hash } from "../services/hashManager";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, password }: userSignUpInfo = req.body;

    if (!name || !email || !password) {
      res.statusCode = 422;
      throw new Error("Body must have 'name','email' and 'password'");
    }

    if (password.length < 6) {
      res.statusCode = 422;
      throw new Error("'password' must have at least 6 characters.");
    }

    const [user] = await connection("Cookenu_User").where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error("Email already registered");
    }

    const id: string = generateId();

    const passwordHash = await hash(password);

    const newUser: user = {
      id,
      name,
      email,
      password: passwordHash,
    };

    await connection("Cookenu_User").insert(newUser);

    const access_token: string = generateToken({ id });

    res.status(201).send({ access_token });
  } catch (error) {
    res.send({ message: error.message });
  }
}
