import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express();

// configaration
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));
app.use(cookieParser());

// import routes
import { userRouter } from "./routes/index.js";


// use reoutes
app.use("/api/users", userRouter);


export default app;