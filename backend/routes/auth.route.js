import express from "express"
import { login, logOut, signup } from "../controllers/auth.controller.js";
import isAuth from "../middleware/isAuth.js";
import { getMe } from "../controllers/user.controller.js";

const authRouter = express.Router()

authRouter.post("/signup", signup)
authRouter.post("/login", login)
authRouter.get("/logout", isAuth, logOut)

export default authRouter;