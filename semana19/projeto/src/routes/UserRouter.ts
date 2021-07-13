import { Router } from "express";
import { UserController } from "../controller/UserController";


const userRouter = Router();
const userController = new UserController();

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.post("/addfriend", userController.addFriend)
userRouter.post("/removefriend", userController.removeFriend)

export default userRouter;
