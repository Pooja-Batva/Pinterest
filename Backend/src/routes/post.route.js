import { createPost, deletePost, likePost } from "../controllers/post.controller.js";
import { Router } from "express";
import verifyJwt from "../middlewares/auth.middleware.js";
import {upload} from "../middlewares/upload.middleware.js"

const postRouter = Router();

postRouter.route('/post').post(upload.single("postImage"),verifyJwt, createPost);
postRouter.route('/post/:id').delete(verifyJwt, deletePost);
postRouter.route('/post/:id').get(verifyJwt, likePost);

export {postRouter};