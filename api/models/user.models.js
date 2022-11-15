const mongoose = require('mongoose');
const mongooseUniqueValid = require('mongoose-unique-validator');

    const userModel = mongoose.Schema({

        name: { type: String, required: true },

        email: { type: String, required: true, unique: true },

        password: { type: String, required: true },
        
        picture: {
            type: String,
            default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
            // 'https://unsplash.com/photos/tAvpDE7fXgY'
        },
    }, 
        { timestamps: true }
);

    

mongoose.plugin(mongooseUniqueValid);

const User = mongoose.model('User', userModel);

module.exports = User;