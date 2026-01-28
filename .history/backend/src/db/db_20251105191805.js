const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect("mongoDB://localhost:27017/food-")
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((err) => {
            console.log("MongoDB connection error:", err);
        })
}

module.exports = connectDB;