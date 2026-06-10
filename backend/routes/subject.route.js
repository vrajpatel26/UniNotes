import express from "express"
import { createSubject, getAllSubjects, getSubjectBySemester } from "../controllers/subject.controller.js";


const subjectRouter = express.Router()

subjectRouter.post("/", createSubject)
subjectRouter.get("/:semesterId", getSubjectBySemester)
subjectRouter.get("/",getAllSubjects)

export default subjectRouter;