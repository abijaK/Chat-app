const router = require('express').Router();
const  registerUser  = require('../controllers/controllers');



router.route('/api/user').post(registerUser)
// router.post('/login', authUser)

module.exports = router;