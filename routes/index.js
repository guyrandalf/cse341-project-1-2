const routes = require('express').Router()

routes.use("/", require('./users'))

module.exports = routes

