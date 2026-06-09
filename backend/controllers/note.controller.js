import cloudinary from "../config/cloudinary.js"
import streamifier from "streamifier"
import Note from "../models/note.model.js"
import Unit from "../models/unit.model.js"


const uploadToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                resource_type: "raw",
                folder: "uninotes"
            },
            (error, result) => {
                if (error) reject(error);
                else resolve(result);
            }
        );

        streamifier.createReadStream(fileBuffer).pipe(stream);
    });
};


export const createNote = async (req, res) => {

    try {
        const { title, unitId, uploadedBy } = req.body

        if (!req.file) {
            return res.status(400).json({
                message: "PDF is required"
            })
        }

        if (!title || !unitId || !uploadedBy) {
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
        
        const uploadResult = await uploadToCloudinary(
            req.file.buffer
        )

        const fileUrl = uploadResult.secure_url

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


export const getNoteByUnitId = async (req, res) => {
    try {
        const { unitId } = req.params

        const notes = await Note.find({ unitId })

        return res.status(200).json(notes)

    } catch (error) {
        return res.status(500).json({ message: `get notes by unitId error ${error}` })
    }
}