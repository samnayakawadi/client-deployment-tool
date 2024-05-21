export const clientState = {
    showEditor: false, // This flag is used when Page is refreshed
    menu: "ui", //ui, services, database
    selectedTabs: {
        ui: "general",
        services: "services",
        database: "mongo"
    },
    data: { // Dummy Data Added Below
        "_id": "65bb4810c9fd9d17971d5e6d",
        "clientName": "Test Client",
        "ui": {
            "home": {
                "homePage": "",
                "logo": "",
                "seb": ""
            },
            "services": {
                "questionAuthoring": "",
                "quizAuthoring": "",
                "delivery": "",
                "admin": "",
                "courseOrganizer": "",
                "courseCatalog": "",
                "learningAnalytics": ""
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
                "userActivity": "",
                "userManagement": ""
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
                "database": ""
            }
        },
    }
}