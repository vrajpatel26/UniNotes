import mongoose from "mongoose";

const semesterSchema = new mongoose.Schema({
    semesterNumber: {
        type: Number,
        unique: true,
        required: true,
        enum: [1, 2, 3, 4, 5, 6, 7, 8]
    }
},
    {
        timestamps: true
    }
)

const Semester = mongoose.model("Semester", semesterSchema)


export default Semester