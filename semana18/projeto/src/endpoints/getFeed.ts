import dayjs from "dayjs";
import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData, recipeInfo } from "../types";

export default async function getFeed(
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

    const recipes = await connection("Cookenu_Followers")
      .join(
        "Cookenu_Recipe",
        "Cookenu_Recipe.user_id",
        "Cookenu_Followers.user_to_follow_id"
      )
      .join("Cookenu_User", "Cookenu_Recipe.user_id", "Cookenu_User.id")
      .select(
        "Cookenu_Recipe.id",
        "Cookenu_Recipe.title",
        "Cookenu_Recipe.description",
        "Cookenu_Recipe.createdAt",
        { userId: "Cookenu_Recipe.user_id" },
        { userName: "Cookenu_User.name" }
      )
      .where({ "Cookenu_Recipe.user_id": tokenData.id });

    if (recipes.length === 0) {
      throw new Error("Your followers haven't posted any recipe yet.");
    }
    if (recipes.length !== 0) {
      recipes.forEach((recipe) => {
        recipe.createdAt = dayjs(recipe.createdAt).format("DD/MM/YYYY");
      });
    }
    res.send({ recipes });
  } catch (error) {
    res.send({ message: error.message });
  }
}
