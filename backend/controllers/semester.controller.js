import Semester from "../models/semester.model.js";
import Subject from "../models/subject.model.js";
import Unit from "../models/unit.model.js";

export const createSemester = async (req, res) => {
    try {
        const { semesterNumber } = req.body

        if (!semesterNumber) {
            return res.status(400).json({
                message: "This field is required"
            });
        }

        const isSemesterNumberExist = await Semester.findOne({ semesterNumber })

        if (isSemesterNumberExist) {
            return res.status(400).json({ message: "semester number already exist" })
        }

        const semester = await Semester.create({
            semesterNumber
        })

        return res.status(200).json(semester)

    } catch (error) {
        
        return res.status(500).json({ message: `semester creation error ${error}` })
    }
}


export const getAllSemesters = async (req, res) => {
    try {

        const semesters = await Semester.find().sort({
            semesterNumber: 1
        })

        
        const semesterData = await Promise.all(
            semesters.map(async (semester) => {

                const subjects = await Subject.find({
                    semesterId: semester._id
                })

                const subjectIds = subjects.map(subject => subject._id)

                const unitCount = await Unit.countDocuments({
                    subjectId: {
                        $in: subjectIds
                    }
                })

                return {
                    ...semester.toObject(),
                    subjectCount: subjects.length,
                    unitCount
                }
            })
        )

        return res.status(200).json(semesterData)

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: `get All semesters error ${error}`
        })
    }
}