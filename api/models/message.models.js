const mongoose = require('mongoose');

const messageModel = mongoose.Schema({
    sender:{
        type:mongoose.Types.ObjectId,
        ref: 'User'
    },
    content:{
        type: String,
        trim: true
    },
    receiver:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Message = mongoose.model('Message', messageModel);

module.exports = Message;