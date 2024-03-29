import { clientsCollection } from "../model/clients.js"
import fs from "fs"

export const addClient = async (req, res) => {

    const dataToAdd = fillDataHandler(req.body)

    try {

        const clientAdded = await clientsCollection.create(dataToAdd)

        if (clientAdded) {
            res.json({
                status: "OK",
                message: "Client Added",
                data: clientAdded
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

            const dataToUpdate = fillDataHandler(req.body)

            const updatedClient = await clientsCollection.findOneAndUpdate(
                { _id: clientId },
                { $set: dataToUpdate },
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

const fillDataHandler = (body) => {

    const {
        clientName,
        realm,
        authServerUrl,
        resource,
        questionAuthoring,
        quizAuthoring,
        delivery,
        admin,
        folderStructure,
        courseUsers,
        courseAuthor,
        ngel,
        logo,
        userActivity,
        waitingTime,
        autoClose
    } = body

    const quizDelivery = delivery

    const dataToUpdate = {
        clientName,
        realm,
        "auth-server-url": authServerUrl,
        "ssl-required": "external",
        resource,
        "public-client": true,
        "confidential-port": 0,
        servers: {
            authoringUI: {
                questionAuthoring,
                quizAuthoring,
                delivery: `${delivery}/assessment/delivery`,
                admin,
                folderStructure: `${folderStructure}/courseOrganizer/getCourseStructure`,
                courseUsers: `${courseUsers}/api/getCourseEnrolledLearners`,
                courseAuthor: `${courseAuthor}/api/checkCourseAuthorStatus`,
                ngel,
                logo
            },
            deliveryUI: {
                questionAuthoring,
                quizAuthoring,
                quizDelivery,
                admin,
                ngel,
                userActivity
            },
            adminUI: {
                ngel,
                admin,
                questionAuthoring
            }
        },
        waitingTime,
        autoClose
    }

    return dataToUpdate
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
        const allClients = await clientsCollection.find()

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

        await clientsCollection.deleteOne()

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