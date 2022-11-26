const router = require('express').Router();

const registerUser  = require('../controllers/auth/register.controllers');
const userLogged = require('../controllers/auth/login.controllers');

const { messages } = require('../controllers/messages.controllers');
const { getAllUsers, getUsersProfile, deleteSingleUser } = require('../controllers/user.controllers');


router.post('/auth/user', registerUser);

router.post('/auth/login', userLogged);

router.get('/users', getAllUsers);

router.get('/users/profile', getUsersProfile);

router.delete('/users/delete/:userID', deleteSingleUser);

router.post('/discuss/chats', messages);

module.exports = router;