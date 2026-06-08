import express from "express"
import { createSubject, getSubjectBySemester } from "../controllers/subject.controller.js";


const subjectRouter = express.Router()

subjectRouter.post("/", createSubject)
subjectRouter.get("/:semesterId", getSubjectBySemester)

export default subjectRouter;