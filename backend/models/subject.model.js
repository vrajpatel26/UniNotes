import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        required: true,

    },
    subjectCode: {
        type: String,
        required: true,
        unique: true
    },
    semesterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Semester",
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    publicId: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)


const Subject = mongoose.model("Subject", subjectSchema)

export default Subject;