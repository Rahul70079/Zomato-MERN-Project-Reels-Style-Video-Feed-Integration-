const foodPartnerModel = require('../models/foodpartner.model');

const jwt = require("jsonwebtoken");

async function authFoodPatnerMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).json({
            message: "Please login first"
        })

    }
    try {
        jwt.verify(token, process.env.JWT_SECRET)
    } catch (err)

}
