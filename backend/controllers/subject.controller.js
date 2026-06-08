import Semester from "../models/semester.model.js"
import Subject from "../models/subject.model.js"

export const createSubject = async (req, res) => {
    try {
        const { subjectName, subjectCode, semesterId } = req.body

        if (!subjectName || !subjectCode || !semesterId) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const semesterExist = await Semester.findById(semesterId)

        if (!semesterExist) {
            return res.status(400).json({ message: "semester not found" })
        }

        const existSubjectCode = await Subject.findOne({ subjectCode })

        if (existSubjectCode) {
            return res.status(400).json({ message: `subject code already exist` })
        }

        const existSubject = await Subject.findOne({
            subjectName,
            semesterId
        })

        if (existSubject) {
            return res.status(400).json({ message: "Subject already exists in this semester" })
        }

        const subject = await Subject.create({
            subjectName,
            subjectCode,
            semesterId
        })

        return res.status(201).json({
            message: "Subject created successfully",
            subject
        })

    } catch (error) {
        return res.status(500).json({ message: `subject creation error ${error}` })
    }
}



export const getSubjectBySemester = async (req, res) => {
    try {
        const { semesterId } = req.params

        const subjects = await Subject.find({
            semesterId
        })

        return res.status(200).json(subjects)
    } catch (error) {
        return res.status(500).json({ message: `getting subject error ${error}` })
    }
}