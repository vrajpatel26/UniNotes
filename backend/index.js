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

const PORT = process.env.PORT || 5000


const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/semester",semesterRouter)


app.listen(PORT,()=>{
    connectDB()
    console.log(`server started on ${PORT} PORT`)
})