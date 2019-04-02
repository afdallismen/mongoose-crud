const routes = require('express').Router()
const { Transaction } = require('../controllers')

routes.get('/', Transaction.list)
routes.get('/:id', Transaction.get)
routes.post('/', Transaction.create)
routes.put('/:id', Transaction.update)
routes.patch('/:id', Transaction.edit)
routes.delete('/:id', Transaction.remove)

module.exports = routes