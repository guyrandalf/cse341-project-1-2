const routes = require('express').Router()
const helloController = require('../controllers/users')

routes.use("/users", require('./users'))

module.exports = routes

