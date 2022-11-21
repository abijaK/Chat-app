const router = require('express').Router();

const registerUser  = require('../controllers/register.controllers');
// const  { userAuth }  = require('../controllers/password.controllers');
const loginUser = require('../controllers/login.controllers')


router.route('/api/user').post(registerUser)
router.get('/api/users', loginUser)
// router.route('/login').post(userAuth)

module.exports = router;