import generateToken from ('../../config/generateToken');
import asyncHandler from ('express-async-handler');
import User from ('../models/user.models');

const userAuth = asyncHandler(async(req, res) =>{
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        const storedPassword = await user.matchPassword(password)

        if (user && (storedPassword)) {
            res.json({
                _id: user._id,
                name: user.name,
                email : user.email,
                picture : user.picture,
                token: generateToken(user._id),
            })
        }else {
            res.status(400);
            throw new Error("Invalid Email or Password")
        }
});

export { userAuth }