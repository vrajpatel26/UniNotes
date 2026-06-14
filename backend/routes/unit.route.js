import express from "express"
import { createUnit, deleteUnit, getAllUnits, getUnitBySubject, updateUnit } from "../controllers/unit.controller.js"

const unitRouter = express.Router()

unitRouter.post("/", createUnit)
unitRouter.get("/all", getAllUnits)
unitRouter.get("/:subjectId", getUnitBySubject)
unitRouter.put("/:id", updateUnit)
unitRouter.delete("/:id", deleteUnit)

export default unitRouter