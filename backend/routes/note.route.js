import express from "express"
import { createNote, deleteNote, getAllNotes, getNoteByUnitId, updateNote } from "../controllers/note.controller.js"
import upload from "../middleware/upload.middleware.js"
import isAuth from "../middleware/isAuth.js"
import { isAdmin } from "../middleware/isAdmin.js"

const noteRouter = express.Router()

noteRouter.post("/",isAuth,isAdmin,upload.single("pdf"),createNote)
noteRouter.get("/all",getAllNotes)
noteRouter.get("/:unitId",getNoteByUnitId)
noteRouter.put("/:id",isAuth,isAdmin,updateNote)
noteRouter.delete("/:id",isAuth,isAdmin,deleteNote)

export default noteRouter