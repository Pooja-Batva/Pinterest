import { addComment, createPost, deletePost, likeCount, likePost, showComments } from "../controllers/post.controller.js";
import { Router } from "express";
import verifyJwt from "../middlewares/auth.middleware.js";
import {upload} from "../middlewares/upload.middleware.js"

const postRouter = Router();

postRouter.route('/post').post(upload.single("postImage"),verifyJwt, createPost);
postRouter.route('/post/:id').delete(verifyJwt, deletePost);
postRouter.route('/post/:id').post(verifyJwt, likePost);
postRouter.route('/post/:id').get(verifyJwt, likeCount);
postRouter.route('/post/comment/:id').post(verifyJwt, addComment);
postRouter.route('/post/comment/:id').get(verifyJwt, showComments);

export {postRouter};