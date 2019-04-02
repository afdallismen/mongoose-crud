const routes = require('express').Router()
const { Book } = require('../controllers')

routes.get('/', Book.list)
routes.get('/:id', Book.get)
routes.post('/', Book.create)
routes.put('/:id', Book.update)
routes.patch('/:id', Book.edit)
routes.delete('/:id', Book.remove)

module.exports = routes