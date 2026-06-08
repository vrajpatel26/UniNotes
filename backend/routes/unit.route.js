import express from "express"
import { createUnit, getUnitBySubject } from "../controllers/unit.controller.js"

const unitRouter = express.Router()

unitRouter.post("/",createUnit)
unitRouter.get("/:subjectId",getUnitBySubject)


export default unitRouter