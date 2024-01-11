import express from "express"
import { addClient, updateClient } from "../controller/clients.js"

const clientsRouter = express.Router()

clientsRouter.post("/add", addClient)
clientsRouter.put("/update", updateClient)

export { clientsRouter }