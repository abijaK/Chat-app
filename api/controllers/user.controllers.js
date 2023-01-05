import { User } from '../models/user.models.js';

// Get all users
const getAllUsers = async (req, res, next) => {

    try {
        const user = await User.find({
                $not: [ 
                    {sender : req.params.id}
                ]
            });

        if (!user) {
            return res.json({
                msg: "Error: None user found",
                status: false
            })
        }else{
           
        console.log("Users found!");
        
        return res.status(200).json({ user });
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
    
    // const { params } = req;
    const { userID } = req.params;
    console.log(userID);

    try {
        
        const name = User.findOne({}).then((nom) => {
            console.log(res);
            return res.json({ 
                userID, 
                msg:`${nom.name} was deleted successfuly!` 
            })
        });
        await User.deleteOne({ 'user._id': userID });

    } catch (error) {
        next(error);
    }
}

export{
    getAllUsers, 
    getUsersProfile,
    deleteSingleUser
};