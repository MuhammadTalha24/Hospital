import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { dbConnection } from "./database/dbconnection.js";

dotenv.config();
const app = express()


app.get('/',(req,res)=>{
    res.send("Welcome To Express Js")
})


app.use(cors())
app.use(express.json())
dbConnection()

app.listen(process.env.PORT,()=>{
    console.log(`Server Running At ${process.env.PORT}`)
})

