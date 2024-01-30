import mongoose from "mongoose";

const mongoSchema = mongoose.Schema({
    "authenticationDatabase": String,
    "username": String,
    "password": String,
    "database": String
})

export const dbSchema = mongoose.Schema({
    "mongo": mongoSchema
})