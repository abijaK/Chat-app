import { User } from '../../models/user.models.js';
import { generateToken } from '../../config/generateToken.js';

// Register user
const registerUser = async (req, res) => {
    
    // Check all fields are not empty
    const { name, email, password, picture} = req.body;

        console.log(req.body);
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
    try {
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
    } catch (error) {
        console.log(error);
    }

};

export { registerUser }