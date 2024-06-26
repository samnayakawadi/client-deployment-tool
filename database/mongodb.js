import mongoose from "mongoose"

export const connectDatabase = () => {

    // With Security
    const DB_USERNAME = process.env.mongodb_username
    const DB_PASSWORD = encodeURIComponent(process.env.mongodb_password)
    const DB_DATABASENAME = process.env.mongodb_database
    const DB_CLUSTERNAME = process.env.mongodb_cluster

    const mongodbURI = process.env.server_mode === "DEV" ? `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTERNAME}?authSource=${DB_DATABASENAME}` : `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTERNAME}/${DB_DATABASENAME}?retryWrites=true&w=majority`

    // Without Security
    // const mongodbURI = "mongodb://127.0.0.1:27017/test"

    mongoose.connect(mongodbURI).then(res => {
        console.log("MongoDB Connection Successful")
    }).catch(error => {
        console.log("MongoDB Connection Failed", error)
    })
}