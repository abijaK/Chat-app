const router = require('express').Router();
const { registerUser } = require('../controllers/controllers');

// registration
router.post('/', registerUser)
// router.post('/login', authUser)

module.exports = router;