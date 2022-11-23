const User = require("../../models/user.models")

const goToChat = async(req, res)=> {

    User.findOne( { email: req.body.email }).then((data) => {
        res.json(data);
        console.log(data);
    })
}

module.exports = goToChat;