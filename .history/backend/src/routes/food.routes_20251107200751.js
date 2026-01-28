const express =  require('express');
const foodController = require("../controllers/food.controller")
const auth
const router = express.Router();


router.post('/', foodController.createFood);

module.exports = router