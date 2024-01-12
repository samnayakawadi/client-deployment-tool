import express from "express"
import { config } from "dotenv"
import { clientsRouter } from "./routes/clients.js"
import cors from "cors"

config({
    path: "./data/config.env"
})

const app = express()

app.use(cors({
    origin: process.env.allowed_client_1,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(express.json())

app.use("/clients", clientsRouter)

export { app }