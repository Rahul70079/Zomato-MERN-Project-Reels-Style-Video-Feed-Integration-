const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect("mongoD")
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((err) => {
            console.log("MongoDB connection error:", err);
        })
}

module.exports = connectDB;