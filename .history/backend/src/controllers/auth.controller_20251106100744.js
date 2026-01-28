const userModel = require("../models/user.model")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {
    const { fullName, email, password } = req.body;
    const isUserAlreadyExists = await userModel.findOne({
        email
         })
          if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User already exists"
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword
    })
    const token = jwt.sign({
        id: user._id,
    
    }, "004cef04ff4a5f6d368599014f07af192d32a055867f66f5892dcb63a80dc92b0427581f735206a1bc5cd6fd9534016801b2b0cc2bd989435429dc69e100da905121a7f799fbf9f6b6309b37127f3965d06680d9ce73cca4670a8e350e2dd2b4268761fd4ba621e1eb545086f39e18bfb24e4ea597d796be6c4cdc6cf4d785c47e6f6444c613b9ded3124b5ae5bfc9378e3eb1d276face73185c6de8db4933be")
    res.cookie("token", token)
    res.status(201).json({
        message: "User registered successfully",
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })

}


async function loginUser(req, res) {
 const { email,password} = req.body;

 const user = await userModel.findOne({
    email
 })
    if (!user){
        res.status(400).json({
            message:"in"
        })
    }
}


    module.exports = {
        registerUser,
        loginUser
    }


