const router = require('express').Router()
const { signInPage, signUpPage, createUser, login } = require('../controllers/userController')

router.get('/sign-in', signInPage)
router.get('/sign-up', signUpPage)
router.post('/sign-in',  login)
router.post("/create/user", createUser)

module.exports = router