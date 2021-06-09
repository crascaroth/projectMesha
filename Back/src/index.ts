import express, { Express, Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"


import server from "./Services/Server"

server()
const app: Express = express()
// app.use("/user", userRouter);
