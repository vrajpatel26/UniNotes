import express from "express"
import { createNote, getNoteByUnitId } from "../controllers/note.controller.js"

const noteRouter = express.Router()

noteRouter.post("/",createNote)
noteRouter.get("/:unitId",getNoteByUnitId)

export default noteRouter