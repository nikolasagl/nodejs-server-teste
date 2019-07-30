const mongoose = require('../database')
const User = mongoose.model('User')

module.exports = {

  async index(req, res) {
    const users = await User.find()

    return res.json(users)
  },

  async create(req, res) {
    const data = req.body

    try {
      if (await User.findOne({ email: data.email }))
        return res.status(400).send({ error: 'User already exists!' })


      const user = await User.create(req.body)

      user.password = undefined

      return res.json({
        user,
        token: user.generateToken()
      })
    } catch (err) {
      return res.status(400).send({ error: 'Registration Failed!' })
    }
  }
}
