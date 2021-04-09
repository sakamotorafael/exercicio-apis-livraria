const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

/* GET home page. */
router.post('/login', authController.login)

module.exports = router
