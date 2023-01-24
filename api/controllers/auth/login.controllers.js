import { User } from "../../models/user.models.js";
import { generateToken } from "../../config/generateToken.js";
import bcrypt from "bcryptjs";
// import { deleteMany } from "../../models/user.models.js";


const userLogged = async(req, res, next)=> {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
          return  res.json({
                msg: "The email address does not match, plz try again !",
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