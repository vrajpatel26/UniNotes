import Subject from "../models/subject.model.js"
import Unit from "../models/unit.model.js"

export const createUnit = async (req, res) => {
    try {
        const { unitNumber, unitName, subjectId } = req.body

        if (!unitNumber || !unitName || !subjectId) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const isSubjectExist = await Subject.findById(subjectId)

        if (!isSubjectExist) {
            return res.status(400).json({ message: "subject does not exist" })
        }

        const existingUnit = await Unit.findOne({
            unitNumber,
            subjectId
        })

        if (existingUnit) {
            return res.status(400).json({
                message: "Unit number already exists in this subject"
            })
        }

        const unit = await Unit.create({
            unitNumber,
            unitName,
            subjectId
        })

        return res.status(201).json(unit)

    } catch (error) {
        return res.status(500).json({ message: `unit creation errror ${error}` })
    }
}


export const getUnitBySubject = async (req, res) => {
    try {
        const { subjectId } = req.params

        const units = await Unit.find({
            subjectId
        })

        return res.status(200).json(units)
        
    } catch (error) {
        return res.status(500).json({ message: `getting units error ${error}` })
    }
}