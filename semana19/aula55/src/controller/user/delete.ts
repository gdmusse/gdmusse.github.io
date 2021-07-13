import { Request, Response } from "express";
import { deleteBusiness } from "../../business/user/deleteBusiness";


export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const token = req.headers.authorization!;
    await deleteBusiness(id, token);

    res.status(201).send({
      message: "User deleted!",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
