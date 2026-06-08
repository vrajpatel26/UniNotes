import express from "express"
import { getAllSemesters } from "../controllers/semester.controller.js";

const semesterRouter = express.Router()

semesterRouter.get("/", getAllSemesters)

export default semesterRouter;