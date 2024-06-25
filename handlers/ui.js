const noURLString = "<NO DATA PROVIDED YET>"

const noURLProvidedString = (string) => {
    return (string === "" || string === undefined || string === null) ? noURLString : string
}

export const convertDBUIJsonToV1 = (uiJson) => {

    const { _id: clientId, clientName, services, home, options, branding, keycloak, } = uiJson

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
                delivery: `${noURLProvidedString(services.delivery)}`,
                admin: noURLProvidedString(services.admin),
                folderStructure: `${noURLProvidedString(services.courseOrganizer)}/courseOrganizer/getCourseStructure`,
                courseUsers: `${noURLProvidedString(services.courseCatalog)}/api/getCourseEnrolledLearners`,
                courseAuthor: `${noURLProvidedString(services.courseCatalog)}/api/checkCourseAuthorStatus`,
                ngel: noURLProvidedString(home.homePage),
                logo: noURLProvidedString(home.logo)
            },
            deliveryUI: {
                questionAuthoring: noURLProvidedString(services.questionAuthoring),
                quizAuthoring: noURLProvidedString(services.quizAuthoring),
                quizDelivery: noURLProvidedString(services.delivery),
                admin: noURLProvidedString(services.admin),
                ngel: noURLProvidedString(home.homePage),
                userActivity: noURLProvidedString(services.learningAnalytics)
            },
            adminUI: {
                ngel: noURLProvidedString(home.homePage),
                admin: noURLProvidedString(services.admin),
                questionAuthoring: noURLProvidedString(services.questionAuthoring),
                courseCatalog: noURLProvidedString(services.courseCatalog),
                userManagement: noURLProvidedString(services.userManagement)
            }
        },
        branding: {
            logoWidth: branding.logoWidth,
            logoHeight: branding.logoHeight,
            footer: branding.footer,
            facebook: branding.facebook,
            twitter: branding.twitter,
            youtube: branding.youtube
        },
        waitingTime: options.waitingTime,
        autoClose: options.autoClose,
        isStandalone: options.isStandalone,
        isNewContentDelivery: options.isNewContentDelivery
    }

    return dataToUpdate
}