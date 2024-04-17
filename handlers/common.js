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
                "logo": ""
            },
            "options": {
                "waitingTime": "",
                "autoClose": "",
                "isStandalone": false
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
                "userActivity": ""
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