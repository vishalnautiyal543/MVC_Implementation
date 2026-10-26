import mongoose from "mongoose";
import {MONGO_URL} from './serverConfig'

export default async function connectionDB(){

    try {

        await mongoose.connect(MONGO_URL)
        console.log("Connected to MongoDB");
        
        
    } catch (error) {
        console.log("DB Connection Failed")
        console.log(error)
    }

}