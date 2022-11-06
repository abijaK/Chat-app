const server = require('express');
const chats = require('./Data/db');
const app = server();
const dotenv = require('dotenv');

const PORT = process.env.PORT || 9000;

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/chat', (req,res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id);
    const oneChat = chats.find((chat) => chat._id === req.params.id)
    res.send(oneChat);
})

app.listen(PORT, ()=>{console.log(`Server started on PORT ${PORT}`)})