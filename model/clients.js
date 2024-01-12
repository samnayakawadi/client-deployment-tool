import mongoose from "mongoose";

const keycloakSchema = mongoose.Schema({
    _id: false,
    "realm": String,
    "resource": String,
    "serverUrl": String
})

const timeSchema = mongoose.Schema({
    _id: false,
    "waitingTime": String,
    "autoClose": String
})

const uiSchema = mongoose.Schema({
    _id: false,
    "homePage": String,
    "logo": String
})

const servicesSchema = mongoose.Schema({
    _id: false,
    "questionAuthoring": String,
    "quizAuthoring": String,
    "delivery": String,
    "admin": String,
    "courseOrganizer": String,
    "courseCatalog": String
})

const clientsSchema = mongoose.Schema(
    {
        "clientName": String,
        "services": servicesSchema,
        "ui": uiSchema,
        "time": timeSchema,
        "keycloak": keycloakSchema
    }
)

export const clientsCollection = mongoose.model("clients", clientsSchema)