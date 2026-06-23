import dns from "dns"
dns.setServers(['1.1.1.1', '8.8.8.8']);

import dotenv from "dotenv"
dotenv.config()
import Semester from "../models/semester.model.js"
import connectDB from "../config/db.js"

const semesters = [
    { semesterNumber: 1 },
    { semesterNumber: 2 },
    { semesterNumber: 3 },
    { semesterNumber: 4 },
    { semesterNumber: 5 },
    { semesterNumber: 6 },
    { semesterNumber: 7 },
    { semesterNumber: 8 }
]

const semesterSeed = async () => {
    try {
        await connectDB();

        await Semester.deleteMany({})

        await Semester.insertMany(semesters)
     

        process.exit(0)

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

semesterSeed()


