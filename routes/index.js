const routes = require('express').Router()

routes.use('/books', require('./books'))
routes.use('/members', require('./members'))
routes.use('/transactions', require('./transactions'))

module.exports = routes