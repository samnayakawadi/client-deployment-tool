import CryptoJS from 'crypto-js';

const noURLString = "<NO DATA PROVIDED YET>"

const noURLProvidedString = (string, encode) => {
    if (encode) {
        string = CryptoJS.AES.encrypt(string, process.env.crypto_secret).toString();
    }
    return (string === "" || string === undefined || string === null) ? noURLString : string
}

export const convertDBUIJsonToV1 = (uiJson) => {

    const { _id: clientId, clientName, services, home, options, branding, keycloak, } = uiJson

    const dataToUpdate = {
        clientId,
        clientName,
        realm: noURLProvidedString(keycloak.realm, false),
        "auth-server-url": noURLProvidedString(keycloak.serverUrl, false),
        "ssl-required": "external",
        resource: noURLProvidedString(keycloak.resource, false),
        "public-client": true,
        "confidential-port": 0,
        servers: {
            authoringUI: {
                questionAuthoring: noURLProvidedString(services.questionAuthoring, true),
                quizAuthoring: noURLProvidedString(services.quizAuthoring, true),
                delivery: `${noURLProvidedString(services.delivery, true)}`,
                admin: noURLProvidedString(services.admin, true),
                folderStructure: `${noURLProvidedString(services.courseOrganizer + "/courseOrganizer/getCourseStructure", true)}`,
                courseUsers: `${noURLProvidedString(services.courseCatalog + "/api/getCourseEnrolledLearners", true)}`,
                courseAuthor: `${noURLProvidedString(services.courseCatalog + "/api/checkCourseAuthorStatus", true)}`,
                ngel: noURLProvidedString(home.homePage, true),
                logo: noURLProvidedString(home.logo, true)
            },
            deliveryUI: {
                questionAuthoring: noURLProvidedString(services.questionAuthoring, true),
                quizAuthoring: noURLProvidedString(services.quizAuthoring, true),
                quizDelivery: noURLProvidedString(services.delivery, true),
                admin: noURLProvidedString(services.admin, true),
                ngel: noURLProvidedString(home.homePage, true),
                userActivity: noURLProvidedString(services.learningAnalytics, true)
            },
            adminUI: {
                ngel: noURLProvidedString(home.homePage, true),
                admin: noURLProvidedString(services.admin, true),
                questionAuthoring: noURLProvidedString(services.questionAuthoring, true),
                courseCatalog: noURLProvidedString(services.courseCatalog, true),
                userManagement: noURLProvidedString(services.userManagement, true)
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