import express from "express"
import { createNote, deleteNote, getAllNotes, getNoteByUnitId, updateNote } from "../controllers/note.controller.js"
import upload from "../middleware/upload.middleware.js"

const noteRouter = express.Router()

noteRouter.post("/",upload.single("pdf"),createNote)
noteRouter.get("/all",getAllNotes)
noteRouter.get("/:unitId",getNoteByUnitId)
noteRouter.put("/:id",updateNote)
noteRouter.delete("/:id",deleteNote)

export default noteRouter