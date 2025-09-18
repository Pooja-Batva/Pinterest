import { loginUser, logoutUser, registerUser } from "../controllers/index.js";
import{Router} from "express";
import {verifyJwt} from "../middlewares/index.js"

const userRouter = Router();

userRouter.route('/auth/register').post(registerUser);
userRouter.route('/auth/login').post(loginUser);
userRouter.route('/auth/logout').post(verifyJwt, logoutUser);

export { 
    userRouter 
};