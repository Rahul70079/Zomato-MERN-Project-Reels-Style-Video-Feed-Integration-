async function createFood(req, res) {
    try {

        // 1️⃣ Check if file received
        if (!req.file) {
            return res.status(400).json({ 
                message: "Video file is required" 
            });
        }

        // 2️⃣ Upload to storage
        const fileUploadResult = await storageService.uploadFile(
            req.file.buffer,
            uuid()
        );

        // 3️⃣ Save to DB
        const foodItem = await foodModel.create({
            name: req.body.name,
            description: req.body.description,
            video: fileUploadResult.url,
            foodPartner: req.foodPartner._id
        });

        return res.status(201).json({
            message: "Food created successfully",
            food: foodItem
        });

    } catch (error) {
        console.log("❌ ERROR in createFood:", error);

        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}
