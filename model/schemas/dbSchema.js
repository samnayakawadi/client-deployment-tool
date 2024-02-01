import mongoose from "mongoose";

const mongoSchema = mongoose.Schema({
    _id: false,
    "authenticationDatabase": String,
    "username": String,
    "password": String,
    "host": String
})

export const dbSchema = mongoose.Schema({
    _id: false,
    "mongo": mongoSchema
})