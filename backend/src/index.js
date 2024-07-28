import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import hotelRouter from "./routes/hotel.route.js"
import searchRouter from "./routes/search.route.js"
dotenv.config();
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name : "dsc65mxay",
    api_key : "637386491822784",
    api_secret : "6fk--Mf6uge7zsE5Jqf9zLmgvhQ"
});

const app = express()

app.use(cors({
    credentials : true,
    origin : "http://localhost:5173",
    allowedHeaders : ['Content-Type', 'Authorization']
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err)
});


app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/hotel", hotelRouter);
app.use("/api/search", searchRouter)

app.listen(7000, () =>{
    console.log("Server is started")
})