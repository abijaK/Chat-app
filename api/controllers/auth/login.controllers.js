const User = require("../../models/user.models");
const  generateToken = require("../../config/generateToken");
const bcrypt = require("bcryptjs");
const { deleteMany } = require("../../models/user.models");


const userLogged = async(req, res, next)=> {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
          return  res.json({
                msg: "Check your name or password",
                status: false });
        }

        const isPasswordMatching = await bcrypt.compare(password, user.password);
        if (!isPasswordMatching) {
            return res.json({
                msg: "Your password is not correct!",
                status:false
            })
        }
        return res.json({
            status:true,
            _id: user._id,
            name: user.name,
            email : user.email,
            password : user.password,
            picture : user.picture,
            token: generateToken(user._id),
        })
    } catch (error) {
        next(error)
    }
}

export { userLogged };