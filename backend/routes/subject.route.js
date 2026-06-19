import express from "express"
import { createSubject, deleteSubject, getAllSubjects, getSubjectBySemester, updateSubject } from "../controllers/subject.controller.js";
import imageUpload from "../middleware/imageUpload.middleware.js";


const subjectRouter = express.Router()


subjectRouter.get("/all", getAllSubjects)
subjectRouter.get("/:semesterId", getSubjectBySemester)
subjectRouter.put("/:id", imageUpload.single("image"), updateSubject)
subjectRouter.delete("/:id", deleteSubject)
subjectRouter.post("/", imageUpload.single("image"), createSubject)

export default subjectRouter;