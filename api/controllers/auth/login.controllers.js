const User = require("../../models/user.models")

const goToChat = async(req, res)=> {
    // const user = await User.find();
    // res.json(user)
    // console.log(user);

    User.find().then((data) => {
        res.json(data);
        console.log(data);
    })
}

module.exports = goToChat;