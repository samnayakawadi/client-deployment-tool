export const clientState = {
    showEditor: false, // This flag is used when Page is refreshed
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
                "logo": ""
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
    },
    menu: "ui" //ui, services, database
}