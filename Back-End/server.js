import express from "express"
import dotenv  from "dotenv"
import cors from "cors"
import mongoose from 'mongoose'

dotenv.config({
    path:"./.env"
})

app.use(cors())
app.use(express.json())

const app = express();





const port = process.env.port || 3000

app.listen(port, () =>{
    console.log(`Server at ${port}`)
})