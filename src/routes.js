const express = require('express')
const requireDir = require('require-dir')

const routes = express.Router()

requireDir('./models')
controllers = requireDir('./controllers')

routes.get('/users', controllers.UserController.index)
routes.post('/login', controllers.UserController.login)

module.exports = routes
