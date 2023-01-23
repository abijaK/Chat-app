import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { routes } from './routes/routes.js';
import { dbConnexion } from './config/dbConnect.js';
import { endPointNotFound } from './middlewares/error.middlewares.js';

import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const PORT = process.env.PORT || 5000;

const server = createServer(app);

// Create an instance of websocket protocole
const io = new Server(server, {
    cors:{
        origin: '*'
    },
    methods:['GET', 'POST', 'PUT', 'DELETE']
});

dbConnexion();
app.use(cors)
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

app.use(endPointNotFound)

    io.on('connection', (socket) => {
        console.log('Connexion etablie !', socket.id);
    })

app.listen(PORT, ()=>{console.log(`Server started on PORT ${PORT}`)})