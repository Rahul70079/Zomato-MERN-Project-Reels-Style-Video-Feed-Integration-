const foodModel = require('../models/food.model');
const storageSer



async function createFood(req, res) { 

console.log(req.foodPartner)

console.log(req.body)
console.log(req.file)

const fileUploadResult = await

res.send("food item created")

}


module.exports = {
    createFood
}