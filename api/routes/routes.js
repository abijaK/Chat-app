const router = require('express').Router();

const registerUser  = require('../controllers/auth/register.controllers');
const userLogged = require('../controllers/auth/login.controllers');

const { messages } = require('../controllers/messagesControllers');


router.post('/auth/user', registerUser);

router.post('/auth/login', userLogged);

router.post('/api/chats', messages)

module.exports = router;