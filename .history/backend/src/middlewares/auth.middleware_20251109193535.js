const foodPartnerModel = require('../models/foodpartner.model');
const
const jwt = require("jsonwebtoken");

async function authFoodPartnerMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).json({
            message: "Please login first"
        })

    }
    try {

       const decoded = jwt.verify(token, process.env.JWT_SECRET)
       const foodPartner = await foodPartnerModel.findById(decoded.id);
       res.foodPartner = foodPartner;
       next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        })

    }

}

async function authUserMiddleware

module.exports = {
    authFoodPartnerMiddleware
}
