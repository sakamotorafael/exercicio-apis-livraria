const express = require('express')
const router = express.Router()
const booksController = require('../controllers/booksController')
const auth = require('../middlewares/auth')

/* GET home page. */
router.get('/', booksController.index) //index
router.get('/:id') // show
router.post('/new', auth, booksController.create) //cadastrar
router.delete('/:id') //delete


module.exports = router