const { User } = require('../models')
const jwt = require('jsonwebtoken')
const jwtSecret = require('../config/jwt')

const controller = {
  login: async(req, res) => {
    const {code} = req.body

    try {
      const user = await User.findOne({
        where: {code}
      })
      if(!user){
        return res.status(401).json({message: "codigo não existe"})
      }

      const token = jwt.sign({ id: user.id }, jwtSecret.SECRET);
      return res.status(200).json({token})

    } catch (error) {
      console.log(error);
      return res.status(500).json({message: "Deu pau."})
    }
  }
}

module.exports = controller