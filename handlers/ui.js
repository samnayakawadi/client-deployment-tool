import CryptoJS from 'crypto-js';

const noURLString = "<NO DATA PROVIDED YET>"

const noURLProvidedString = (string, encode) => {
    if (encode) {
        string = CryptoJS.AES.encrypt(string, process.env.crypto_secret).toString();
    }
    return (string === "" || string === undefined || string === null) ? noURLString : string
}

const getServers = (home, services, options) => {
    if (options.serverMode === "DEV") {
        return {
            home: noURLProvidedString(home.homePage, true),
            questionAuthoring: noURLProvidedString(services.questionAuthoring, true),
            quizAuthoring: noURLProvidedString(services.quizAuthoring, true),
            quizDelivery: `${noURLProvidedString(services.delivery, true)}`,
            quizAdmin: noURLProvidedString(services.admin, true),
            courseOrganizer: noURLProvidedString(services.courseOrganizer, true),
            courseCatalog: noURLProvidedString(services.courseCatalog, true),
            learningAnalytics: noURLProvidedString(services.learningAnalytics, true),
            userManagement: noURLProvidedString(services.userManagement, true),
            courseCompletion: noURLProvidedString(services.courseCompletion, true)
        }
    }
    else if (options.serverMode === "PRO") {
        return {
            home: noURLProvidedString(home.homePage, true),
            gatewayUrl: noURLProvidedString(services.gatewayUrl, true)
        }
    }
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
        servers: getServers(home, services, options),
        branding: {
            logo: noURLProvidedString(branding.logo, true),
            logoWidth: branding.logoWidth,
            logoHeight: branding.logoHeight,
            footer: branding.footer,
            facebook: branding.facebook,
            twitter: branding.twitter,
            youtube: branding.youtube
        },
        options: {
            waitingTime: options.waitingTime,
            autoClose: options.autoClose,
            isStandalone: options.isStandalone,
            isNewContentDelivery: options.isNewContentDelivery,
            serverMode: options.serverMode
        }
    }

    return dataToUpdate
}