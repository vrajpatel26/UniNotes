import cloudinary from "../config/cloudinary.js"
import Note from "../models/note.model.js"
import Semester from "../models/semester.model.js"
import Subject from "../models/subject.model.js"
import Unit from "../models/unit.model.js"


export const createSubject = async (req, res) => {
    try {
    
        const { subjectName, subjectCode, semesterId } = req.body

        const image = req.file;

        if (!image) {
            return res.status(400).json({
                message: "Subject image is required"
            });
        }

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

        const existingSubject = await Subject.findOne({
            subjectName,
            semesterId
        })

        if (existingSubject) {
            return res.status(400).json({ message: "Subject already exists in this semester" })
        }


        const cloudinaryResult = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                {
                    folder: "uninotes-subjects"
                },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(image.buffer);
        });

        const subject = await Subject.create({
            subjectName,
            subjectCode,
            semesterId,
            imageUrl: cloudinaryResult.secure_url,
            publicId: cloudinaryResult.public_id
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


export const getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find().populate("semesterId")
        subjects.sort(
            (a, b) => a.semesterId.semesterNumber - b.semesterId.semesterNumber
        );

        return res.status(200).json(subjects)

    } catch (error) {
        return res.status(500).json({ message: `getting all subject error ${error}` })

    }
}

export const updateSubject = async (req, res) => {
    try {
    

        const { id } = req.params;
        const { subjectName, subjectCode } = req.body;

        const image = req.file;

        const subject = await Subject.findById(id);

        if (!subject) {
            return res.status(404).json({
                message: "Subject not found"
            });
        }

        subject.subjectName = subjectName;
        subject.subjectCode = subjectCode;

        if (image) {

            await cloudinary.uploader.destroy(
                subject.publicId
            );

            const cloudinaryResult = await new Promise(
                (resolve, reject) => {
                    cloudinary.uploader.upload_stream(
                        {
                            folder: "uninotes-subjects"
                        },
                        (error, result) => {
                            if (error) reject(error);
                            else resolve(result);
                        }
                    ).end(image.buffer);
                }
            );

            subject.imageUrl = cloudinaryResult.secure_url;
            subject.publicId = cloudinaryResult.public_id;
        }

        await subject.save();

        return res.status(200).json({
            message: "Subject updated successfully",
            subject
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: `update subject error ${error.message}`
        });
    }
};

export const deleteSubject = async (req, res) => {
    try {
        const { id } = req.params;

        const subject = await Subject.findById(id);

        if (!subject) {
            return res.status(404).json({
                message: "Subject not found"
            });
        }

        // Delete subject image from Cloudinary
        if (subject.publicId) {
            await cloudinary.uploader.destroy(
                subject.publicId
            );
        }

        // Find all units of subject
        const units = await Unit.find({
            subjectId: id
        });

        const unitIds = units.map(
            unit => unit._id
        );

        // Find all notes of those units
        const notes = await Note.find({
            unitId: {
                $in: unitIds
            }
        });

        // Delete PDFs from Cloudinary
        for (const note of notes) {
            if (note.publicId) {
                await cloudinary.uploader.destroy(
                    note.publicId,
                    {
                        resource_type: "raw"
                    }
                );
            }
        }

        // Delete notes from MongoDB
        await Note.deleteMany({
            unitId: {
                $in: unitIds
            }
        });

        // Delete units
        await Unit.deleteMany({
            subjectId: id
        });

        // Delete subject
        await Subject.deleteOne({
            _id: id
        });

        return res.status(200).json({
            message: "Subject deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: `delete subject error ${error}`
        });
    }
};
