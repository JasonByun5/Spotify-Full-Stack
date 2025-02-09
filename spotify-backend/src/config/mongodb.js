import mongoose from "mongoose";

const connectDB = async () => {

    await mongoose.connection.on('connected', () => {
        console.log("connection established");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/spotify`);
}

export default connectDB;