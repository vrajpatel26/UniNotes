import express from "express"
import {getBookmarks, toggleBookmark} from "../controllers/bookmark.controller.js"
import isAuth from "../middleware/isAuth.js"



const bookmarkRouter = express.Router()

bookmarkRouter.post("/:noteId",isAuth,toggleBookmark)
bookmarkRouter.get("/",isAuth,getBookmarks)


export default bookmarkRouter