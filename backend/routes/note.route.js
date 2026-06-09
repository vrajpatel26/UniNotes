import express from "express"
import { createNote, getNoteByUnitId } from "../controllers/note.controller.js"
import upload from "../middleware/upload.middleware.js"

const noteRouter = express.Router()

noteRouter.post("/",upload.single("pdf"),createNote)
noteRouter.get("/:unitId",getNoteByUnitId)

export default noteRouter