const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app
app.use(express.json());
app.get("/", (req, res) => {
    res.send("hello world");
})
module.exports = app;