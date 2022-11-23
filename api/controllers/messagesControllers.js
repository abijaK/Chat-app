const Message = require("../models/message.models.js");

// Retrieve all message sended
const messages = async(req, res, next) => {
    const msg = await Message.find();
    try {
        if (msg) {
            return msg;
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

module.exports = {messages, addMessage}