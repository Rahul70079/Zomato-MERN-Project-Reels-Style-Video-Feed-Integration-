const express =  require('express');
const foodController = require("../controllers/food.controller")
const 
const router = express.Router();


router.post('/', foodController.createFood);

module.exports = router