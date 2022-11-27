const User = require('../models/user.models');
const asyncHandler = require('express-async-handler');
const  generateToken  = require('../config/generateToken');

// Registration
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, picture } = req.body;

    if (!username || !email || !password) {
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
        username,
        email,
        password,
        picture
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.mail,
            picture: user.picture,
            token: generateToken(user._id)
        })

    } else {
        res.status(400);
        throw new Error("Failed to create the User");
    }
});

const getAllUsers = async (req, res, next) => {

    try {
        const user = await User.find();
        if (!user) {
            return res.json({
                msg: "Error: None user found",
                status: false
            })
        }else{
           
        console.log("Users are availables")
        
        return res.status(200).json({ user })
        }
        
    } catch (error) {
        next(error)
    }
}

// Get the profile of user
const getUsersProfile = async(req, res, next) => {

    const allUsers = {};
    try {
        const users = await User.find({}, ["name", "picture"]);

        if (!users) {
            return res.json({
                msg: "Error: No user found!",
                status: false
            })
        }

        users.forEach(user => {
            allUsers[user._id] = user;
        })

        res.status(200).json(allUsers)
    } catch (error) {
        next(error)
    }
}

// Delete a single document of user
const deleteSingleUser = async(req, res, next) => {
    
    const { params } = req;
    const { userID } = params;

    try {
        await User.deleteOne({ 'user._id': userID });

        const name = User.findOne({}).then((nom) => {
            return res.json({ 
                userID, 
                msg:`${nom.name} was deleted successfuly!` 
            })
        });
    } catch (error) {
        next(error);
    }
}

module.exports = { 
    registerUser , 
    getAllUsers, 
    getUsersProfile,
    deleteSingleUser
};