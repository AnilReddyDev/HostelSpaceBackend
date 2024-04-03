const mongoose = require('mongoose');
require('dotenv').config()
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(`MongoDB connected: ${connect.connection.host}`)
        console.log(`MongoDB connected: ${connect.connection.name}`)

    } catch (error) {
        console.log("Error while connecting to MongoDB", error)
    }
}

module.exports = connectDB