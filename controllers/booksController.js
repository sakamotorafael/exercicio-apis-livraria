const { Books } = require('../models')

const controller = {
  index: async (req, res) => {
    const listBooks = await Books.findAll()
    return res.status(200).json(listBooks)
  },

  create: async (req, res) => {
    try {
      const { name, cover } = req.body
      if (!name){
        return res.status(412).json({message: 'Invalid name.'})
      }
      const newBook = await Books.create({ name, cover })
      return res.status(201).json(newBook)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'ocorreu um erro na solicitação' })
    }
  },
}

module.exports = controller
