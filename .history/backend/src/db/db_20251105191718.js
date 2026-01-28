const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect("mongoDB://localhost:27017/zoo")
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((err) => {
            console.log("MongoDB connection error:", err);
        })
}

module.exports = connectDB;