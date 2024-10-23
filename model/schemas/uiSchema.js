import mongoose from "mongoose";

const uiKeycloakSchema = mongoose.Schema({
    _id: false,
    "realm": String,
    "resource": String,
    "serverUrl": String
})

const uiOptionsSchema = mongoose.Schema({
    _id: false,
    "waitingTime": String,
    "autoClose": String,
    "isStandalone": Boolean,
    "isNewContentDelivery": Boolean,
    "serverMode": String
})

const uiHomeSchema = mongoose.Schema({
    _id: false,
    "homePage": String,
    "seb": String
})

const uiServicesSchema = mongoose.Schema({
    _id: false,
    "gatewayUrl": String,
    "questionAuthoring": String,
    "quizAuthoring": String,
    "delivery": String,
    "admin": String,
    "courseOrganizer": String,
    "courseCatalog": String,
    "learningAnalytics": String,
    "userManagement": String,
    "courseCompletion": String
})

const uiBrandingSchema = mongoose.Schema({
    _id: false,
    "logo": String,
    "logoWidth": String,
    "logoHeight": String,
    "footer": String,
    "facebook": String,
    "twitter": String,
    "youtube": String
})

// parent
export const uiSchema = mongoose.Schema({
    _id: false,
    "home": uiHomeSchema,
    "services": uiServicesSchema,
    "options": uiOptionsSchema,
    "keycloak": uiKeycloakSchema,
    "branding": uiBrandingSchema
})