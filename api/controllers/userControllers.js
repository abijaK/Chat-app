const User = require('../models/user.models');
const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, picture } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Fields");
    }

    // Search for email to know if user exists
    const userExists = await User.findOne({ email });
    
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        picture
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.mail,
            picture: user.picture
        })
    } else {
        res.status(400);
        throw new Error("Failed to create the User");
    }
});

module.exports = { registerUser };