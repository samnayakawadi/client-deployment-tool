import express from "express"
import { addClient, deleteClient, generateJSON, generateProperties, getClient, getClients, updateClient } from "../controller/clients.js"

const clientsRouter = express.Router()

clientsRouter.post("/add", addClient)
clientsRouter.put("/update", updateClient)
clientsRouter.get("/get", getClient)
clientsRouter.get("/getAll", getClients)
clientsRouter.delete("/delete", deleteClient)
clientsRouter.get("/generate-json", (req, res, next) => { req.requestType = "download"; next() }, generateJSON)
clientsRouter.get("/view-json", (req, res, next) => { req.requestType = "view"; next() }, generateJSON)
clientsRouter.get("/generate-properties", generateProperties)

export { clientsRouter }