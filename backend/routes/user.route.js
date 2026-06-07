import express from "express"
import isAuth from "../middleware/isAuth.js";
import { getMe } from "../controllers/user.controller.js";

const userRouter = express.Router()

userRouter.get("/me", isAuth, getMe)

export default userRouter;