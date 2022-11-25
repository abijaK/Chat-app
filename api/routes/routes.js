const router = require('express').Router();

const registerUser  = require('../controllers/auth/register.controllers');
const userLogged = require('../controllers/auth/login.controllers');

const { messages } = require('../controllers/messagesControllers');
const { getAllUsers, getUsersProfile } = require('../controllers/user.controllers');


router.post('/auth/user', registerUser);

router.get('/auth/users', getAllUsers);

router.post('/auth/login', userLogged);

router.get('/discuss/users/profile', getUsersProfile);

router.post('/discuss/chats', messages)

module.exports = router;