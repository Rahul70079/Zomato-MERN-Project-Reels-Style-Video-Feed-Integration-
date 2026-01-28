const express =  require('express');
const foodController = require("../controllers/food.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const router = express.Router();
const multer = 


router.post('/', authMiddleware.authFoodPartnerMiddleware, foodController.createFood);

module.exports = router