import express from "express"
import { addClient, deleteClient, generateJSON, getClient, getClients, updateClient } from "../controller/clients.js"

const clientsRouter = express.Router()

clientsRouter.post("/add", addClient)
clientsRouter.put("/update", updateClient)
clientsRouter.get("/get", getClient)
clientsRouter.get("/getAll", getClients)
clientsRouter.delete("/delete", deleteClient)
clientsRouter.get("/generate", generateJSON)

export { clientsRouter }