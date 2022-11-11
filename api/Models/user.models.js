const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    // name
    name: {
        type: String,
        required: true,
    },
    // email
    email: {
        type: String,
        required: true,
    },
    // password
    password: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        // 'https://unsplash.com/photos/tAvpDE7fXgY'
    },
    isAdmin: {
        type: mongoose.Types.ObjectId,
        required: true,
        default: false
    },
}, 
    { timestamps: true }
);

const User = mongoose.model('User', userModel);

module.exports = User;