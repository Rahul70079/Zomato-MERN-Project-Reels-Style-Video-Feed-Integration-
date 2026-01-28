const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service');



async function createFood(req, res) { 

console.log(req.foodPartner)

console.log(req.body)
console.log(req.file)

const fileUploadResult = await storageService.uploadFile(req.fileres.send("food item created")

}


module.exports = {
    createFood
}