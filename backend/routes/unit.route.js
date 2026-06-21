import express from "express"
import { createUnit, deleteUnit, getAllUnits, getUnitBySubject, updateUnit } from "../controllers/unit.controller.js"
import isAuth from "../middleware/isAuth.js"
import { isAdmin } from "../middleware/isAdmin.js"

const unitRouter = express.Router()

unitRouter.post("/",isAuth,isAdmin, createUnit)
unitRouter.get("/all", getAllUnits)
unitRouter.get("/:subjectId", getUnitBySubject)
unitRouter.put("/:id",isAuth,isAdmin, updateUnit)
unitRouter.delete("/:id",isAuth,isAdmin, deleteUnit)

export default unitRouter