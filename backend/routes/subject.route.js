import express from "express"
import { createSubject, deleteSubject, getAllSubjects, getSubjectBySemester, updateSubject } from "../controllers/subject.controller.js";


const subjectRouter = express.Router()

subjectRouter.post("/", createSubject)
subjectRouter.get("/all",getAllSubjects)
subjectRouter.get("/:semesterId", getSubjectBySemester)
subjectRouter.put("/:id",updateSubject)
subjectRouter.delete("/:id",deleteSubject)

export default subjectRouter;