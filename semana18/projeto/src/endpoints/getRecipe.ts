import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData, recipeInfo } from "../types";

export default async function getRecipe(
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

    const recipe = await connection("Cookenu_Recipe").select().where({ id });

    if (recipe.length === 0) {
      throw new Error("Recipe not found.");
    }

    const recipeInfo: recipeInfo = {
      id,
      title: recipe[0].title,
      description: recipe[0].description,
      createdAt: recipe[0].createdAt
    };

    res.send(recipeInfo);
  } catch (error) {
    res.send({ message: error.message });
  }
}
