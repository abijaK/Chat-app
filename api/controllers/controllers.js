const asyncHandler = require('express-async-handler');
const User = require('../models/user.models');
const generateToken = require('../config/generateToken')

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic} = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all the fields")
    }

    // Let check if User exist in BD
    const userExists = await User.findOne({ email});

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    // Create a new user
    const user = await User.create({
        name,
        email,
        password,
        picture,
        token: generateToken(user._id),
    });

    // Check if user has been created successfuly
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email : user.email,
            password : user.password,
            picture : user.picture
        })
    }else {
        res.status(400);
        throw new Error("Failed to Create the User")
    }
});
module.exports = { registerUser }