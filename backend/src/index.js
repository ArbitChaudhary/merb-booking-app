import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js"

dotenv.config();

const app = express()

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err)
});


app.use("/api/auth", authRouter)

app.listen(7000, () =>{
    console.log("Server is started")
})