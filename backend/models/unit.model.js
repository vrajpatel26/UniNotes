import mongoose from "mongoose";

const unitSchema = new mongoose.Schema({
    unitNumber: {
        type: Number,
        required: true,
    },
    unitName: {
        type: String,
        required: true
    },
    subjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: true,
        index:true
    }
},
    {
        timestamps: true
    }

)

const Unit = mongoose.model("Unit", unitSchema)

export default Unit