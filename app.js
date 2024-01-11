import express from "express"
import { config } from "dotenv"
import { clientsRouter } from "./routes/clients.js"

config({
    path: "./data/config.env"
})

const app = express()

app.use(express.json())

app.use("/clients", clientsRouter)

export { app }