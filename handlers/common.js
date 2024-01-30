export const getDefaultJson = (clientName) => {
    const defaultJson = {
        clientName,
        "services": {
            "questionAuthoring": "",
            "quizAuthoring": "",
            "delivery": "",
            "admin": "",
            "courseOrganizer": "",
            "courseCatalog": "",
            "learningAnalytics": ""
        },
        "ui": {
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
    }

    return defaultJson
}