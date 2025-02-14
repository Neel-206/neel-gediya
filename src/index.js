//require('dotenv').config({ path: './env' });
import dotenv from "dotenv"
import connectDB from "./db/index.js";



dotenv.config({
    path: './.env'
})



connectDB()








/*
import express from "express";
const app = express();

(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${mydb}`)
        app.on("error", (error) => {
            console.log("Error:", error);
            throw err;
        })

        app.listen(process.env.port, () => {
            console.log(`app is listening on port ${process.env.port}`);
        })
    } catch (error) {
        console.error("ERROR:", error)
        throw err
    }
})()*/