import { app } from "./app.js";
import { connectDatabase } from "./database/mongodb.js";

app.listen(process.env.server_port, () => {
    console.log("App running at port", process.env.server_port)
})

connectDatabase()