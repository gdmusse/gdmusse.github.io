import { Request, Response } from "express";
import { FriendDTO, LoginInputDTO, UserInputDTO } from "../model/User";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  async signup(req: Request, res: Response) {
    try {
      const input: UserInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();
      const token = await userBusiness.createUser(input);

      let message = "User created successfully!";

      res.status(201).send({ message, token });
    } catch (error) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;

      res.send({ message });
    }
  }
  async login(req: Request, res: Response) {
    try {
      const input: LoginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();
      const token = await userBusiness.getUserByEmail(input);

      let message = "Login successfully!";

      res.status(201).send({ message, token });
    } catch (error) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;

      res.send({ message });
    }
  }

  async addFriend(req: Request, res: Response) {
    try {
      const token = req.headers.authorization!;

      const input: FriendDTO = { id: req.body.id };

      const userBusiness = new UserBusiness();
      await userBusiness.addFriend(input, token);

      let message = "Friend added successfully!";

      res.status(201).send({ message });
    } catch (error) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;

      res.send({ message });
    }
  }

  async removeFriend(req: Request, res: Response) {
    try {
      const token = req.headers.authorization!;

      const input: FriendDTO = { id: req.body.id };

      const userBusiness = new UserBusiness();
      await userBusiness.removeFriend(input, token);

      let message = "Friend removed successfully!";

      res.status(201).send({ message });
    } catch (error) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;

      res.send({ message });
    }
  }
}
