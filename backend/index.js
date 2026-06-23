//used for dns issue for connect db
import dns from "dns"
dns.setServers(['1.1.1.1', '8.8.8.8']);

import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cookieParser from "cookie-parser"
import connectDB from "./config/db.js"
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import cors from "cors"
import semesterRouter from "./routes/semester.route.js";
import subjectRouter from "./routes/subject.route.js";
import unitRouter from "./routes/unit.route.js";
import noteRouter from "./routes/note.route.js";
import dashboardRouter from "./routes/dashboard.route.js";
import bookmarkRouter from "./routes/bookmark.route.js";
import feedbackRouter from "./routes/feedback.route.js";

const PORT = process.env.PORT || 5000


const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/semester", semesterRouter)
app.use("/api/subject", subjectRouter)
app.use("/api/unit", unitRouter)
app.use("/api/note", noteRouter)
app.use("/api/dashboard", dashboardRouter)
app.use("/api/bookmark", bookmarkRouter)
app.use("/api/feedback", feedbackRouter);

connectDB()
app.listen(PORT, () => {
    console.log(`server started on ${PORT} PORT`)
})