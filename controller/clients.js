import { convertDBJsonToV1 } from "../handlers/ui.js"
import { getDefaultJson } from "../handlers/common.js"
import { clientsCollection } from "../model/client.js"

export const addClient = async (req, res) => {

    const { clientName } = req.query

    try {

        const defaultJson = getDefaultJson(clientName)

        const clientAdded = await clientsCollection.create(defaultJson)

        if (clientAdded) {
            setTimeout(() => {
                res.json({
                    status: "OK",
                    message: "Client Added",
                    data: {
                        _id: clientAdded._id,
                        clientName
                    }
                })
            }, process.env.network_delay)
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

            setTimeout(() => {
                res.json({
                    status: "OK",
                    message: "Client Updated",
                    data: updatedClient
                })
            }, process.env.network_delay)

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
            setTimeout(() => {
                res.status(200).json({
                    status: "OK",
                    message: "Client Details Fetched",
                    data: dbClient
                })
            }, process.env.network_delay)
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

        setTimeout(() => {
            res.status(200).json({
                status: "OK",
                message: "Retrieved All Clients",
                data: allClients
            })
        }, process.env.network_delay)
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

        setTimeout(() => {
            res.status(200).json({
                status: "OK",
                message: "Client Deleted",
            })
        }, process.env.network_delay)
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
        const json = convertDBJsonToV1(dbClient)

        if (dbClient) {

            // Adds indentation
            const jsonString = JSON.stringify(json, null, 2)

            res.setHeader("Content-Type", "application/json")
            if (req.requestType === "download") {
                res.setHeader("Content-Disposition", "attachment; filename=data.json")
            }

            setTimeout(() => {
                res.send(jsonString)
            }, process.env.network_delay)

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

export const generateProperties = (req, res) => {



    res.setHeader('Content-Type', 'text/plain');
    res.setHeader("Content-Disposition", "attachment; filename=questionAuthoring.properties")

    res.send(properties)
}