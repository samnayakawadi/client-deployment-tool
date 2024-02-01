import mongoose from "mongoose";

const keycloak = mongoose.Schema({
    _id: false,
    "realm": String,
    "resource": String,
    "serverUrl": String
})

const services = mongoose.Schema({
    _id: false,
    "questionAuthoring": String,
    "quizAuthoring": String,
    "delivery": String,
    "admin": String,
    "courseOrganizer": String,
    "courseCatalog": String,
    "learningAnalytics": String
})

const uploads = mongoose.Schema({
    _id: false,
    "assessmentFileUpload": String,
    "assessmentQTIUpload": String
})

export const servicesSchema = mongoose.Schema({
    _id: false,
    "services": services,
    "uploads": uploads,
    "keycloak": keycloak
})