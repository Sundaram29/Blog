import Router from "express";
import { submitHandler } from "../controller/submitHandler.js";

const userRouter = Router();

userRouter.post('/contact', submitHandler);

export default userRouter;