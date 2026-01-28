const foodPartnerModel = require('../models/foodpartner.model');

const jwt = require("jsonwebtoken");

async function authFoodPatnerMiddleware(req, res, next) {
    const token = req.cookies.token;

}
