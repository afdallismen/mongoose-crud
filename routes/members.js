const routes = require('express').Router()
const { Member } = require('../controllers')

routes.get('/', Member.list)
routes.get('/:id', Member.get)
routes.post('/', Member.create)
routes.put('/:id', Member.update)
routes.patch('/:id', Member.edit)
routes.delete('/:id', Member.remove)

module.exports = routes