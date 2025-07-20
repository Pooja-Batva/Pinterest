import { registerUser } from "../controllers/index.js";
import{Router} from "express";

const userRouter = Router();

userRouter.route('/register').post(registerUser);

export { userRouter };