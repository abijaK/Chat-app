import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { routes } from './routes/routes.js';
import { dbConnexion } from './config/dbConnect.js';
import { endPointNotFound } from './middlewares/error.middlewares.js';


const app = express();

const PORT = process.env.PORT || 5000;


dbConnexion();

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})
app.options(/.*/,(req, res) => {
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.end()
})

app.use(routes);


// app.use('/auth/user', routes)

// app.use('/api/users', routes)

// app.get('/api/chats', (req,res) => {
    //     res.send(chats)
// })

// app.get('/api/chat/:id', (req, res) => {
//     const oneChat = chats.find((chat) => chat._id === req.params.id)
//     res.send(oneChat);
// })

app.use(endPointNotFound)
// app.use(errorHandler)

app.listen(PORT, ()=>{console.log(`Server started on PORT ${PORT}`)})