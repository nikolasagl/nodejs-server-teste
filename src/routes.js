const express = require('express')
const requireDir = require('require-dir')
const authMiddleware = require('./middlewares/auth')

const routes = express.Router()

const controllers = requireDir('./controllers')

routes.post('/login', controllers.AuthController.login)

routes.post('/register', controllers.UserController.create)

routes.use(authMiddleware)

routes.get('/users', controllers.UserController.index)

module.exports = routes
