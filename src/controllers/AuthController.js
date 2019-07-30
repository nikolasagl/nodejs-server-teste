const mongoose = require('../database')
const User = require('../models/User')

module.exports = {

  async login(req, res) {
    try {
      const data = req.body

      const user = await User.findOne({ email: data.username }).select('+password')

      if (!user)
        return res.status(400).json({ error: "User not found!" })

      if (!(await user.compareHash(data.password)))
        return res.status(400).json({ error: "Invalid password!" })

      user.password = undefined

      return res.json({
        user,
        token: user.generateToken()
      })

    } catch (err) {
      return res.status(400).json({ error: "User authentication failed!" });
    }
  }
}
