import { Router } from "express";
import { PostController } from "../controller/PostController";

const postRouter = Router()
const postController = new PostController()

postRouter.put('/create', postController.createPost)
postRouter.get('/:id', postController.getPostById)

export default postRouter 
