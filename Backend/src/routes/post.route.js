import { createPost } from "../controllers/post.controller.js";
import { Router } from "express";
import verifyJwt from "../middlewares/auth.middleware.js";
import {upload} from "../middlewares/upload.middleware.js"

const postRouter = Router();

postRouter.route('/post').post(upload.single("postImage"),verifyJwt, createPost);

export {postRouter};