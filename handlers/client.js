const noURLString = "<NO DATA PROVIDED YET>"

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

const noURLProvidedString = (string) => {
    return (string === "" || string === undefined || string === null) ? noURLString : string
}

export const convertDBJsonToV1 = (dbJson) => {

    const { _id: clientId, clientName, services, ui, time, keycloak } = dbJson

    const dataToUpdate = {
        clientId,
        clientName,
        realm: noURLProvidedString(keycloak.realm),
        "auth-server-url": noURLProvidedString(keycloak.serverUrl),
        "ssl-required": "external",
        resource: noURLProvidedString(keycloak.resource),
        "public-client": true,
        "confidential-port": 0,
        servers: {
            authoringUI: {
                questionAuthoring: noURLProvidedString(services.questionAuthoring),
                quizAuthoring: noURLProvidedString(services.quizAuthoring),
                delivery: `${noURLProvidedString(services.quizAuthoring)}/assessment/delivery`,
                admin: noURLProvidedString(services.quizAuthoring),
                folderStructure: `${noURLProvidedString(services.courseOrganizer)}/courseOrganizer/getCourseStructure`,
                courseUsers: `${noURLProvidedString(services.courseCatalog)}/api/getCourseEnrolledLearners`,
                courseAuthor: `${noURLProvidedString(services.courseCatalog)}/api/checkCourseAuthorStatus`,
                ngel: noURLProvidedString(ui.homePage),
                logo: noURLProvidedString(ui.logo)
            },
            deliveryUI: {
                questionAuthoring: noURLProvidedString(services.questionAuthoring),
                quizAuthoring: noURLProvidedString(services.quizAuthoring),
                quizDelivery: noURLProvidedString(services.delivery),
                admin: noURLProvidedString(services.admin),
                ngel: noURLProvidedString(ui.homePage),
                userActivity: noURLProvidedString(services.learningAnalytics)
            },
            adminUI: {
                ngel: noURLProvidedString(ui.homePage),
                admin: noURLProvidedString(services.admin),
                questionAuthoring: noURLProvidedString(services.questionAuthoring),
            }
        },
        waitingTime: time.waitingTime,
        autoClose: time.autoClose
    }

    return dataToUpdate
}