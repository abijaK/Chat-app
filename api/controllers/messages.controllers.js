const { default: mongoose } = require("mongoose");
const Message = require("../models/message.models.js");

// Retrieve all message sended and selected by id 
const showMessages = async(req, res, next) => {
    // console.log(req.params._id);
    const msg = await Message.find({
        $or: [
                {sender: new mongoose.Types.ObjectId(req.params.id)},
                {reciever: new mongoose.Types.ObjectId(req.params.id)}
            ]
    });
    console.log(req.params);
    try {
        if (msg) {
            res.json({ message: msg });
        }
    } catch (error) {
        next(error);
    }
}

// Create a new message
const addMessage =async(req, res) => {
    const newMessage = new Message({ ...req.body });
    newMessage.save();
    res.json({ message: newMessage });
}

module.exports = {showMessages, addMessage}