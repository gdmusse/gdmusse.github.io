import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { authenticationData, recipe, recipeFullInfo } from "../types";
import dayjs from "dayjs";

export default async function createRecipe(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { title, description }: recipe = req.body;

    const access_token = req.headers.authorization! as string;
    const tokenData: authenticationData | null = getTokenData(access_token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Unauthorized");
    }

    if (!title || !description) {
      res.statusCode = 422;
      throw new Error("Body must have 'title' and 'description'");
    }

    const id: string = generateId();

    const todayDate = dayjs().format("YYYY-MM-DD");

    const newRecipe: recipeFullInfo = {
      id,
      user_id: tokenData.id,
      title,
      description,
      createdAt: todayDate,
    };

    await connection("Cookenu_Recipe").insert(newRecipe);

    res.status(201).send("Recipe created");
  } catch (error) {
    res.send({ message: error.message });
  }
}
