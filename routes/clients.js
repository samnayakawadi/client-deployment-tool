import express from "express"
import { addClient, getClient, updateClient } from "../controller/clients.js"

const clientsRouter = express.Router()

clientsRouter.post("/add", addClient)
clientsRouter.put("/update", updateClient)
clientsRouter.get("/get", getClient)

export { clientsRouter }