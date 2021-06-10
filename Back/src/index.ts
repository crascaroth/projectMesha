import express, { Express, Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"


import server from "./Services/Server"
import { userRouter } from "./Routes/userRouter"

dotenv.config()
const app: Express = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server running on port 3003")
})

app.use("/user", userRouter);
