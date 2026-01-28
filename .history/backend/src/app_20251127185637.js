const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const cors = require('cors');

const app = express();

app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// ⚠️ IMPORTANT: json parser should not run before file-upload routes
app.use("/api/auth", express.json(), authRoutes);

// ⚠️ Do NOT put express.json() here for food routes
app.use("/api/food", foodRoutes);

app.get("/", (req, res) => {
    res.send("hello world");
});

module.exports = app;
