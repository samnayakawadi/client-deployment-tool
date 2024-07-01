export const getDefaultJson = (clientName) => {
    const defaultJson = {
        clientName,
        "ui": {
            "services": {
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
                "waitingTime": "",
                "autoClose": "",
                "isStandalone": false
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