const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const chats = require('./config/db');
const dbConnexion = require('./config/dbConnect');
const PORT = process.env.PORT || 9000;

const routes = require('./routes/routes')
const app = express();

dbConnexion();

console.log(process.env.DB_URL);

app.use(routes)

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/chats', async (req,res) => {
    res.send(JSON.stringify(chats))
})

app.get('/api/chats/:id', (req, res) => {
    const oneChat = chats.find((chat) => chat._id === req.params.id)
    res.send(oneChat);
})

app.options(/.*/,(req, res) => {
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.end()
})

app.listen(PORT, ()=>{console.log(`Server started on PORT ${PORT}`)})