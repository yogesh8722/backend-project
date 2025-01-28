import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async () => {
    try {
        const connectionDatabase=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB Connected !! DB HOST: ${connectionDatabase.connection.host}`);
    } catch (error) {
        console.error("MONGODB Connection error",error)
        process.exit(1)
    }
}

export default connectDB