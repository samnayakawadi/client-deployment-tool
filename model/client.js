import mongoose from "mongoose";
import { uiSchema } from "./schemas/uiSchema.js";
import { servicesSchema } from "./schemas/servicesSchema.js";
import { dbSchema } from "./schemas/dbSchema.js";

const clientsSchema = mongoose.Schema(
    {
        "clientName": String,
        "ui": uiSchema,
        "services": servicesSchema,
        "database": dbSchema
    }
)

export const clientsCollection = mongoose.model("clients", clientsSchema)