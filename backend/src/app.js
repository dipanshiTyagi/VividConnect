import express from "express";
import { createServer } from "node:http";

import { connectToSocket } from "./controllers/socketManager.js";

import mongoose from "mongoose";

import cors from "cors";
import userRoutes from "./routes/users.route.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8002));
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

// app.get("/", (req, res) => {
//     return res.json({ "hello": "World" })
// });

const start = async () => {
    const mongouri = await mongoose.connect("mongodb+srv://dipanshityagi18:AOYUkHuxkFhrjcew@cluster0.tlwce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`MONGO Connected DB Host: ${mongouri.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log("Listening on port 8002");
    });
}

start();