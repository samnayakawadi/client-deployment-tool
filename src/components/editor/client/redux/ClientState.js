export const clientState = {
    showEditor: false, // This flag is used when Page is refreshed
    selectedTabs: {
        ui: "general",
        services: "services",
        database: "mongo"
    },
    data: { // Dummy Data Added Below
        "_id": "65b8df18e84f474f618df258",
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
            },
            "_id": "65b8df18e84f474f618df259"
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
            "_id": "65b8df18e84f474f618df25a"
        },
        "database": {
            "mongo": {
                "authenticationDatabase": "",
                "username": "",
                "password": "",
                "database": "",
                "_id": "65b8df18e84f474f618df25c"
            },
            "_id": "65b8df18e84f474f618df25b"
        },
    },
    menu: "ui" //ui, services, database
}