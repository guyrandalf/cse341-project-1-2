const routes = require('express').Router()
const helloController = require('../controllers/hello')

routes.get("/", helloController)

module.exports = routes

