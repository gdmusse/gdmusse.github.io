import { Request, Response } from "express";
import { LoginInputDTO, UserInputDTO } from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { Post, PostInputDTO } from "../model/Post";
import { PostBusiness } from "../business/PostBusiness";
import { Authenticator } from "../services/Authenticator";

export class PostController {
  async createPost(req: Request, res: Response) {
    try {
      const input: PostInputDTO = {
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type,
      };

      const token = req.headers.authorization!;

      const postBusiness = new PostBusiness();
      await postBusiness.createPost(input, token);

      let message = "Post created successfully!";

      res.status(201).send({ message });
    } catch (error) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;

      res.send({ message });
    }
  }
  async getPostById(req: Request, res: Response) {
    try {
      const token = req.headers.authorization!;

      const id = req.params.id;

      const postBusiness = new PostBusiness();
      const post = await postBusiness.getPostByID(id, token);

      res.send({ post });
    } catch (error) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;

      res.send({ message });
    }
  }
}
