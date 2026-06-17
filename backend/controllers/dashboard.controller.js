import Note from "../models/note.model.js"
import Subject from "../models/subject.model.js"
import Unit from "../models/unit.model.js"


export const getDashboardStats = async(req,res)=>{
    try {
        const totalSubjects = await Subject.countDocuments()
        const totalUnits = await Unit.countDocuments()
        const totalNotes = await Note.countDocuments()

        return res.status(200).json({
            totalSubjects,
            totalUnits,
            totalNotes
        })
    } catch (error) {
        return res.status(500).json({message:`dashboard stats error ${error}`})
    }
}

