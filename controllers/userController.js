const { User } = require('../models')

const controller = {
  index: async(req, res) => {
    const listUser = await User.findAll()
    
    return res.status(200).json(listUser)
  
  },
  create: async (req, res) => {
    const { code } = req.body
    const newUser = await User.create({ code })

    return res.status(201).json(newUser)
  },
}

module.exports = controller
