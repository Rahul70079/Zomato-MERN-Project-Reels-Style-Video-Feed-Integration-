const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.M)
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((err) => {
            console.log("MongoDB connection error:", err);
        })
}

module.exports = connectDB;