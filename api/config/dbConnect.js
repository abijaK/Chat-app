import dotenv from 'dotenv'
dotenv.config();
import mongoose from 'mongoose';

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

export { dbConnexion };