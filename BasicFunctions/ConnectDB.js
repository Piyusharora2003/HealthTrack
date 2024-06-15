import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connection.readyState) {
        console.log(`MongoDB Connected: ${mongoose.connection.host}`);
        return true;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${mongoose.connection.host}`);
        return true; 
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

export default connectDB;