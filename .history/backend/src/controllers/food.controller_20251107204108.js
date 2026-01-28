const foodModel = require('../models/food.model');




async function createFood(req, res) { 

console.log(req.foodPartner)

console
res.send("food item created")

}


module.exports = {
    createFood
}