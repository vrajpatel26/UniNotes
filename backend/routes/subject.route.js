import express from "express"
import { createSubject, deleteSubject, getAllSubjects, getSubjectBySemester, updateSubject } from "../controllers/subject.controller.js";
import imageUpload from "../middleware/imageUpload.middleware.js";
import isAuth from "../middleware/isAuth.js";
import { isAdmin } from "../middleware/isAdmin.js";


const subjectRouter = express.Router()


subjectRouter.get("/all", getAllSubjects)
subjectRouter.get("/:semesterId", getSubjectBySemester)
subjectRouter.put("/:id", isAuth, isAdmin, imageUpload.single("image"), updateSubject)
subjectRouter.delete("/:id", isAuth, isAdmin, deleteSubject)
subjectRouter.post("/", isAuth, isAdmin, imageUpload.single("image"), createSubject)

export default subjectRouter;