import Note from "../models/note.model.js"
import Unit from "../models/unit.model.js"

export const createNote = async (req, res) => {

    try {
        const { title, fileUrl, unitId, uploadedBy } = req.body

        if (!title || !fileUrl || !unitId || !uploadedBy) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const isUnitExist = await Unit.findById(unitId)

        if (!isUnitExist) {
            return res.status(400).json({ message: "unit does not exist" })
        }

        const existingTitle = await Note.findOne({
            title,
            unitId
        })

        if (existingTitle) {
            return res.status(400).json({
                message: "Note title already exists in this unit"
            })
        }

        const note = await Note.create({
            title,
            fileUrl,
            unitId,
            uploadedBy
        })

        return res.status(201).json(note)
    } catch (error) {
        return res.status(500).json({ message: `Note creation error ${error}` })
    }

}


export const getNoteByUnitId = async (req,res) => {
    try {
        const { unitId } = req.params

        const notes = await Note.find({unitId})

        return res.status(200).json(notes)

    } catch(error) {
        return res.status(500).json({message:`get notes by unitId error ${error}`})
    }
}