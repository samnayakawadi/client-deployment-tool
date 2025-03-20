import mongoose from "mongoose";

const keycloak = mongoose.Schema({
    _id: false,
    "realm": String,
    "resource": String,
    "serverUrl": String
})

const options = mongoose.Schema({
    _id: false,
    "courseStructureFinalPretestCall": Boolean
})

const lrs = mongoose.Schema({
    _id: false,
    "enable": Boolean,
    "service": String,
    "homepage": String,
    "token": String,
})

const services = mongoose.Schema({
    _id: false,
    "questionAuthoring": String,
    "quizAuthoring": String,
    "delivery": String,
    "admin": String,
    "courseOrganizer": String,
    "courseCatalog": String,
    "learningAnalytics": String,
    "imageSanitizer": String,
    "courseCompletion": String,
    "userManagement": String
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
    "options": options,
    "lrs": lrs,
    "keycloak": keycloak
})