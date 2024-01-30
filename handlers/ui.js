const noURLString = "<NO DATA PROVIDED YET>"

const noURLProvidedString = (string) => {
    return (string === "" || string === undefined || string === null) ? noURLString : string
}

export const convertDBUIJsonToV1 = (uiJson) => {

    const { _id: clientId, clientName, services, home, time, keycloak } = uiJson

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
                ngel: noURLProvidedString(home.mainPage),
                logo: noURLProvidedString(home.logo)
            },
            deliveryUI: {
                questionAuthoring: noURLProvidedString(services.questionAuthoring),
                quizAuthoring: noURLProvidedString(services.quizAuthoring),
                quizDelivery: noURLProvidedString(services.delivery),
                admin: noURLProvidedString(services.admin),
                ngel: noURLProvidedString(home.mainPage),
                userActivity: noURLProvidedString(services.learningAnalytics)
            },
            adminUI: {
                ngel: noURLProvidedString(home.mainPage),
                admin: noURLProvidedString(services.admin),
                questionAuthoring: noURLProvidedString(services.questionAuthoring),
            }
        },
        waitingTime: time.waitingTime,
        autoClose: time.autoClose
    }

    return dataToUpdate
}