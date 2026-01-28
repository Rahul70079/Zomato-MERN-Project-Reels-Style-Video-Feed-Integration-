const foodModel = require('../models/food.model');




async function createFood(req, res) { 

console.log(req.foodPartner)

res.send("food item c")

}


module.exports = {
    createFood
}