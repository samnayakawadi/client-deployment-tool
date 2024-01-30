import mongoose from "mongoose";

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
    "services": services,
    "uploads": uploads
})