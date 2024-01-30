import mongoose from "mongoose";

const uiKeycloakSchema = mongoose.Schema({
    _id: false,
    "realm": String,
    "resource": String,
    "serverUrl": String
})

const uiTimeSchema = mongoose.Schema({
    _id: false,
    "waitingTime": String,
    "autoClose": String
})

const uiHomeSchema = mongoose.Schema({
    _id: false,
    "homePage": String,
    "logo": String
})

const uiServicesSchema = mongoose.Schema({
    _id: false,
    "questionAuthoring": String,
    "quizAuthoring": String,
    "delivery": String,
    "admin": String,
    "courseOrganizer": String,
    "courseCatalog": String,
    "learningAnalytics": String
})

// parent
export const uiSchema = mongoose.Schema({
    "home": uiHomeSchema,
    "services": uiServicesSchema,
    "time": uiTimeSchema,
    "keycloak": uiKeycloakSchema
})