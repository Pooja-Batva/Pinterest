import { loginUser, logoutUser, registerUser } from "../controllers/index.js";
import{Router} from "express";
import {verifyJwt} from "../middlewares/index.js"
import { follow, getfollowers, getFollowing } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route('/auth/register').post(registerUser);
userRouter.route('/auth/login').post(loginUser);
userRouter.route('/auth/logout').post(verifyJwt, logoutUser);
userRouter.route('/follow').post(verifyJwt, follow);
userRouter.route('/getFollowing').get(verifyJwt, getFollowing);
userRouter.route('/getfollowers').get(verifyJwt, getfollowers);

export { 
    userRouter 
};