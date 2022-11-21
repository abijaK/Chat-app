const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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

    // Compare entered password with password stored in DB
    // userModel.methods.matchPassword = async function(enteredPassword){
    //     return await bcrypt.compare(enteredPassword, this.password)
    // }

    // // Crypts password before saving
    // userModel.pre("save", async function(next){
    //     if (!this.isModified) {
    //         next();
    //     }

    //     // Generate a new password crypted
    //     const salt = await bcrypt.genSalt(10)
    //     this.password = await bcrypt.hash(this.password, salt)
    // })


mongoose.plugin(mongooseUniqueValid);

const User = mongoose.model('User', userModel);

module.exports = User;