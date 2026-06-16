import Note from "../models/note.model.js"
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


export const getAllUnits = async (req, res) => {
    try {
        const units = await Unit.find().populate("subjectId")

        return res.status(200).json(units)
    } catch (error) {
        return res.status(500).json({ message: `getting all units error ${error}` })
    }
}


export const updateUnit = async (req, res) => {
    try {
        const { id } = req.params

        const { unitName } = req.body

        const updatedUnit = await Unit.findByIdAndUpdate(
            id,
            { unitName },
            { new: true }
        )

        return res.status(200).json(updatedUnit)

    } catch (error) {
        return res.status(500).json({ message: `update unit error ${error}` })

    }
}

export const deleteUnit = async (req, res) => {
    try {
        const { id } = req.params

        await Note.deleteMany({
            unitId: id
        });

        const deleteUnit = await Unit.deleteOne({
            _id: id
        })

        return res.status(200).json({ message: "delete unit successfully" })

    } catch (error) {
        return res.status(500).json({ message: `delete unit error ${error}` })
    }
}
