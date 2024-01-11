import mongoose from "mongoose";

const adminUISchema = mongoose.Schema({
    _id: false,
    "ngel": String,
    "admin": String,
    "questionAuthoring": String
})

const deliveryUISchema = mongoose.Schema({
    _id: false,
    "questionAuthoring": String,
    "quizAuthoring": String,
    "quizDelivery": String,
    "admin": String,
    "ngel": String,
    "userActivity": String
})

const authoringUISchema = mongoose.Schema({
    _id: false,
    "questionAuthoring": String,
    "quizAuthoring": String,
    "delivery": String,
    "admin": String,
    "folderStructure": String,
    "courseUsers": String,
    "courseAuthor": String,
    "ngel": String,
    "logo": String
})

const serverSchema = mongoose.Schema({
    _id: false,
    "authoringUI": authoringUISchema,
    "deliveryUI": deliveryUISchema,
    "adminUI": adminUISchema
})

const clientsSchema = mongoose.Schema(
    {
        "clientName": String,
        "realm": String,
        "auth-server-url": String,
        "ssl-required": String,
        "resource": String,
        "public-client": Boolean,
        "confidential-port": Number,
        "servers": serverSchema,
        "waitingTime": Number,
        "autoClose": Number
    }
)

export const clientsCollection = mongoose.model("clients", clientsSchema)