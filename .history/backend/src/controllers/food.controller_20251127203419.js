async function createFood(req, res) {
    try {

        // Check if file exist
        if (!req.file) {
            return res.status(400).json({ message: "Video file is required" });
        }

        // Upload file to Cloud (ImageKit / S3 etc)
        const fileUploadResult = await storageService.uploadFile(
            req.file.buffer,
            uuid()
        );

        // Create food Item
        const foodItem = await foodModel.create({
            name: req.body.name,
            description: req.body.description,
            video: fileUploadResult.url,
            foodPartner: req.foodPartner._id
        });

        res.status(201).json({
            message: "food created successfully",
            food: foodItem
        });

    } catch (error) {
        console.error("❌ ERROR in createFood =>", error);
        console.error("❌ MESSAGE =>", error.message);

        res.status(500).json({
            message: "Server error in createFood",
            error: error.message
        });
    }
}

async function getFoodItems(req, res) {
    const foodItems = await foodModel.find({})
    res.status(200).json({
        message: "Food items fetched successfully",
        foodItems
    })
}

module.exports = {
    createFood,
    getFoodItems
}