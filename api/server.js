const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const PORT = process.env.PORT || 5000;
// const chats = require('./config/data');
const routes = require('./routes/routes');
const dbConnexion = require('./config/dbConnect');
const { endPointNotFound, errorHandler } = require('./middlewares/error.middlewares');

const app = express();

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


// app.use('/api/user', routes)

// app.use('/api/users', routes)

// app.get('/api/chats', (req,res) => {
    //     res.send(chats)
// })

// app.get('/api/chat/:id', (req, res) => {
//     const oneChat = chats.find((chat) => chat._id === req.params.id)
//     res.send(oneChat);
// })

app.use(endPointNotFound)
app.use(errorHandler)

app.listen(PORT, ()=>{console.log(`Server started on PORT ${PORT}`)})