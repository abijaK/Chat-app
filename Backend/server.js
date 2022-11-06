const express = require('express');
// const { chats } = require('./Data/db');
const app = express();
const PORT = 6000;

// app.get('/', (req, res) => {
//     res.send('API is in use')
// })

// app.get('/api/chat', (req,res) => {
//     res.send(chats)
// })

app.listen(PORT, `Server started on PORT ${PORT}`)