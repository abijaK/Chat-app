const router = require('express').Router();

const registerUser  = require('../controllers/auth/register.controllers');
const loginUser = require('../controllers/auth/login.controllers');
const { messages } = require('../controllers/messagesControllers');


// router.route('/login').post(userAuth)
router.post('/api/user', registerUser);
router.get('/api/users', loginUser);
router.post('/api/chats', messages)

module.exports = router;