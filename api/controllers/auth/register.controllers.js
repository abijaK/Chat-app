const User = require('../../models/user.models');
const asyncHandler = require('express-async-handler') 
const generateToken = require('../../config/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, picture} = req.body;

    // Check all fields are not empty
   try {
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all the fields")
    }
   } catch (error) {
     console.log(error);
   }

    // Let check if User exist in BD
    const userExists = await User.findOne({ email });

    // Check if user already exists
    try {
        if (userExists) {
            res.status(400);
            throw new Error("User already exists");
        }
    } catch (error) {
        console.log(error);
    }

    // Create a new user
    const user = await User.create({
        name,
        email,
        password,
        picture
    });
   
    // Check if user has been created successfuly
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email : user.email,
            password : user.password,
            picture : user.picture,
            token: generateToken(user._id),
        })
    }else {
        res.status(400);
        throw new Error("Failed to Create the User")
    }

});

// const registerUser = (req, res) => {
//     const user = new User({...req.body});
//     console.log(user);
//     user.save();    
//}
module.exports =  registerUser; 