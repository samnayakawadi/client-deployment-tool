import mongoose from "mongoose"

export const connectDatabase = () => {

    const DB_USERNAME = process.env.mongodb_username
    const DB_PASSWORD = encodeURIComponent(process.env.mongodb_password)
    const DB_DATABASENAME = process.env.mongodb_database
    const DB_CLUSTERNAME = process.env.mongodb_cluster

    const mongodbURI = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTERNAME}?authSource=${DB_DATABASENAME}`

    mongoose.connect(mongodbURI).then(res => {
        console.log("MongoDB Connection Successfully")
    }).catch(error => {
        console.log("MongoDB Connection Failed", error)
    })
}