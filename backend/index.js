//used for dns issue for connect db
import dns from "dns"
dns.setServers(['1.1.1.1', '8.8.8.8']);

import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectDB from "./config/db.js"

const PORT = process.env.PORT || 5000


const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("uniNotes API running");
    
})

app.listen(PORT,()=>{
    connectDB()
    console.log(`server started on ${PORT} PORT`)
})