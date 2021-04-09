const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

/* GET home page. */
router.get('/', userController.index) //index
router.get('/:id') // show
router.post('/', userController.create) //create
router.delete('/:id')


module.exports = router
