import mongoose from 'mongoose';

const messageModel = mongoose.Schema({
    sender:{
        type:mongoose.Types.ObjectId,
        ref: 'User'
    },
    content:{
        type: String,
        trim: true
    },
    reciever:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Message = mongoose.model('Message', messageModel);

export { Message };