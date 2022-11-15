const router = require('express').Router();

const registerUser  = require('../controllers/controllers');
const  { userAuth }  = require('../controllers/passwordControllers');


router.route('/api/user').post(registerUser)
router.route('/login').post(userAuth)

module.exports = router;