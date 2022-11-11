const server = require('express');
const chats = require('./Data/db');
const app = server();
const dotenv = require('dotenv');

const PORT = process.env.PORT || 9000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/chats', (req,res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    const oneChat = chats.find((chat) => chat._id === req.params.id)
    res.send(oneChat);
})

app.options(/.*/,(req, res) => {
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.end()
})

app.listen(PORT, ()=>{console.log(`Server started on PORT ${PORT}`)})