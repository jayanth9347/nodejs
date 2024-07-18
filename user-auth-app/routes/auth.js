// routes/auth.js

const express = require('express')
const router = express.Router()
const {register, login, getProfile} = require('../controllers/authController')
const auth = require('../middlewares/auth')

router.post('/register', register)
router.post('/login', login)
router.get('/profile', auth, getProfile)

module.exports = router
