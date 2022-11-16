const router = require('express').Router();

const registerUser  = require('../controllers/register.controllers');
const  { userAuth }  = require('../controllers/password.controllers');


router.route('/api/user').post(registerUser)
router.route('/login').post(userAuth)

module.exports = router;