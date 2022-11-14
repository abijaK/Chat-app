const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const dbConnexion = async() => {
    try {
        const con = await mongoose.connect(process.env.BD_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoBD connected successfuly ${con.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = dbConnexion;