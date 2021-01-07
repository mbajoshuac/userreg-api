const router = require('express').Router()
const {registerUser, getUser} = require('../controllers/userController')


router.route('/register').post(registerUser)
router.route('/all').get(getUser)


module.exports = router