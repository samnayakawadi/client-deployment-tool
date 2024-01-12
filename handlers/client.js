export const getDefaultJson = (clientName) => {
    const defaultJson = {
        clientName,
        "services": {
            "questionAuthoring": "",
            "quizAuthoring": "",
            "delivery": "",
            "admin": "",
            "courseOrganizer": "",
            "courseCatalog": ""
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

// const dbJsonToRequiredJsonConvertor = (body) => {

//     const {
//         clientName,
//         realm,
//         authServerUrl,
//         resource,
//         questionAuthoring,
//         quizAuthoring,
//         delivery,
//         admin,
//         folderStructure,
//         courseUsers,
//         courseAuthor,
//         ngel,
//         logo,
//         userActivity,
//         waitingTime,
//         autoClose
//     } = body

//     const quizDelivery = delivery

//     const dataToUpdate = {
//         clientName,
//         realm,
//         "auth-server-url": authServerUrl,
//         "ssl-required": "external",
//         resource,
//         "public-client": true,
//         "confidential-port": 0,
//         servers: {
//             authoringUI: {
//                 questionAuthoring,
//                 quizAuthoring,
//                 delivery: `${delivery}/assessment/delivery`,
//                 admin,
//                 folderStructure: `${folderStructure}/courseOrganizer/getCourseStructure`,
//                 courseUsers: `${courseUsers}/api/getCourseEnrolledLearners`,
//                 courseAuthor: `${courseAuthor}/api/checkCourseAuthorStatus`,
//                 ngel,
//                 logo
//             },
//             deliveryUI: {
//                 questionAuthoring,
//                 quizAuthoring,
//                 quizDelivery,
//                 admin,
//                 ngel,
//                 userActivity
//             },
//             adminUI: {
//                 ngel,
//                 admin,
//                 questionAuthoring
//             }
//         },
//         waitingTime,
//         autoClose
//     }

//     return dataToUpdate
// }