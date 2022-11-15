const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const PORT = process.env.PORT || 5000;
const routes = require('./routes/routes');
const dbConnexion = require('./config/dbConnect');

const app = express();

dbConnexion();

// console.log(process.env.BD_URL);

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

// app.use(endPointNotFound)
// app.use(errorHandler)

app.listen(PORT, ()=>{console.log(`Server started on PORT ${PORT}`)})