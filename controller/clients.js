import { clientsCollection } from "../model/clients.js"

export const addClient = async (req, res) => {

    const {
        clientName,
        realm,
        authServerUrl,
        resource,
        questionAuthoring,
        quizAuthoring,
        delivery,
        admin,
        folderStructure,
        courseUsers,
        courseAuthor,
        ngel,
        logo,
        userActivity,
        waitingTime,
        autoClose
    } = req.body

    const quizDelivery = delivery

    const clientAdded = await clientsCollection.create({
        clientName,
        realm,
        "auth-server-url": authServerUrl,
        "ssl-required": "external",
        resource,
        "public-client": true,
        "confidential-port": 0,
        servers: {
            authoringUI: {
                questionAuthoring,
                quizAuthoring,
                delivery: `${delivery}/assessment/delivery`,
                admin,
                folderStructure: `${folderStructure}/courseOrganizer/getCourseStructure`,
                courseUsers: `${courseUsers}/api/getCourseEnrolledLearners`,
                courseAuthor: `${courseAuthor}/api/checkCourseAuthorStatus`,
                ngel,
                logo
            },
            deliveryUI: {
                questionAuthoring,
                quizAuthoring,
                quizDelivery,
                admin,
                ngel,
                userActivity
            },
            adminUI: {
                ngel,
                admin,
                questionAuthoring
            }
        },
        waitingTime,
        autoClose
    })

    res.json({
        status: "OK",
        message: "Client Added",
        data: clientAdded
    })
}