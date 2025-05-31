import mongoose from "mongoose";
const connectDB = async () => {
    mongoose.connection.on("connected",() => {
        console.log("connection established");
        
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/spotify`)
}
export const disConnectDB = async () => {
        mongoose.connection.on("disconnected",() => {
        console.log("connection closed");
        
    })
    await mongoose.disconnect()
}
export default connectDB;