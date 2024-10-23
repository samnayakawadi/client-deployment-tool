export const getDefaultJson = (clientName) => {
    const defaultJson = {
        clientName,
        "ui": {
            "services": {
                "gatewayUrl": "",
                "questionAuthoring": "",
                "quizAuthoring": "",
                "delivery": "",
                "admin": "",
                "courseOrganizer": "",
                "courseCatalog": "",
                "learningAnalytics": "",
                "userManagement": ""
            },
            "home": {
                "homePage": "",
                "seb": ""
            },
            "options": {
                "waitingTime": "1000",
                "autoClose": "2000",
                "isStandalone": false,
                "serverMode": "DEV"
            },
            "branding": {
                "logo": "",
                "logoWidth": "",
                "logoHeight": "",
                "footer": "",
                "facebook": "",
                "twitter": "",
                "youtube": ""
            },
            "keycloak": {
                "realm": "",
                "resource": "",
                "serverUrl": ""
            }
        },
        "services": {
            "services": {
                "questionAuthoring": "",
                "quizAuthoring": "",
                "delivery": "",
                "admin": "",
                "courseOrganizer": "",
                "courseCatalog": "",
                "learningAnalytics": "",
                "imageSanitizer": "",
                "courseCompletion": ""
            },
            "uploads": {
                "assessmentFileUpload": "",
                "assessmentQTIUpload": ""
            },
            "options": {
                "courseStructureFinalPretestCall": false
            },
            "keycloak": {
                "realm": "",
                "resource": "",
                "serverUrl": ""
            }
        },
        "database": {
            "mongo": {
                "authenticationDatabase": "",
                "username": "",
                "password": "",
                "host": ""
            }
        }
    }

    return defaultJson
}