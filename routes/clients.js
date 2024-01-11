import express from "express"
import { addClient } from "../controller/clients.js"

const clientsRouter = express.Router()

clientsRouter.post("/add", addClient)

export { clientsRouter }