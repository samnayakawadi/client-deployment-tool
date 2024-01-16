import { getDefaultJson } from "../handlers/client.js"
import { clientsCollection } from "../model/clients.js"

export const addClient = async (req, res) => {

    const { clientName } = req.query

    try {

        const defaultJson = getDefaultJson(clientName)

        const clientAdded = await clientsCollection.create(defaultJson)

        if (clientAdded) {
            res.json({
                status: "OK",
                message: "Client Added",
                data: {
                    _id: clientAdded._id,
                    clientName
                }
            })
        }
        else {
            res.json({
                status: "NOTOK",
                message: "Client Addition Failed",
            })
        }

    } catch (error) {
        res.status(500).json({
            status: "INTERNALSERVERERROR",
            message: error
        })
    }
}

export const updateClient = async (req, res) => {

    const { clientId } = req.query

    try {
        const isClientPresent = await clientsCollection.findOne({ _id: clientId })

        if (isClientPresent) {

            const updatedClient = await clientsCollection.findOneAndUpdate(
                { _id: clientId },
                { $set: req.body },
                { new: true }
            );

            res.json({
                status: "OK",
                message: "Client Updated",
                data: updatedClient
            })

        }
        else {
            res.status(404).json({
                status: "NOTFOUND",
                message: "Client Not Found"
            })
        }

    } catch (error) {
        res.status(500).json({
            status: "INTERNALSERVERERROR",
            message: error
        })
    }
}

export const getClient = async (req, res) => {
    const { clientId } = req.query

    try {

        const dbClient = await clientsCollection.findOne({ _id: clientId })

        if (dbClient) {
            res.status(200).json({
                status: "OK",
                message: "Client Details Fetched",
                data: dbClient
            })
        } else {
            res.status(404).json({
                status: "OK",
                message: "Client Not Found",
            })
        }
    } catch (error) {
        res.status(500).json({
            status: "INTERNALSERVERERROR",
            message: error
        })
    }

}

export const getClients = async (req, res) => {
    try {
        const allClients = await clientsCollection.find().select("clientName")

        res.status(200).json({
            status: "OK",
            message: "Retrieved All Clients",
            data: allClients
        })
    } catch (error) {
        res.status(500).json({
            status: "INTERNALSERVERERROR",
            message: error
        })
    }
}

export const deleteClient = async (req, res) => {

    const { clientId } = req.query

    const dbClient = await clientsCollection.findOne({ _id: clientId })

    if (dbClient) {

        await dbClient.deleteOne()

        res.status(200).json({
            status: "OK",
            message: "Client Deleted",
        })
    } else {
        res.status(404).json({
            status: "OK",
            message: "Client Not Found",
        })
    }
}

export const generateJSON = async (req, res) => {
    const { clientId } = req.query

    try {

        const dbClient = await clientsCollection.findOne({ _id: clientId })

        if (dbClient) {

            // Adds indentation
            const jsonString = JSON.stringify(dbClient, null, 2)

            res.setHeader("Content-Type", "application/json")
            res.setHeader("Content-Disposition", "attachment; filename=data.json")

            res.send(jsonString)

        } else {
            res.status(404).json({
                status: "OK",
                message: "Client Not Found",
            })
        }
    } catch (error) {
        res.status(500).json({
            status: "INTERNALSERVERERROR",
            message: error
        })
    }
}