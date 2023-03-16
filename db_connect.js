const mongoose = require("mongoose")
async function getConnection() {
    try {
        await mongoose.connect("mongodb://localhost:27017/NGO")
        console.log("Database is Connected")
    }
    catch (error) {
        console.log(error)
    }
}
getConnection()

