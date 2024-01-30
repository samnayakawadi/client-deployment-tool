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
                "learningAnalytics": ""
            },
            "home": {
                "homePage": "",
                "logo": ""
            },
            "time": {
                "waitingTime": "",
                "autoClose": ""
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
                "learningAnalytics": ""
            },
            "uploads": {
                "assessmentFileUpload": "",
                "assessmentQTIUpload": ""
            }
        },
        "database": {
            "mongo": {
                "authenticationDatabase": "",
                "username": "",
                "password": "",
                "database": ""
            }
        }
    }

    return defaultJson
}