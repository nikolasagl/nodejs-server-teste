const mongoose = require('mongoose')

const User = mongoose.model('User')

module.exports = {

  async index(req, res) {
    const users = await User.find()

    return res.json(users)
  },

  async login(req, res) {
    const data = req.body

    const user = await User.findOne({ name: data.username, password: data.password })

    return res.json(user)
  }
}
