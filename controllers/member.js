const { Member } = require('../models')

module.exports = {
  list: (req, res) => {
    Member
      .find()
      .then(members => res.status(200).json(members))
      .catch(err => res.status(500).json(err))
  },
  get: (req, res) => {
    Member
      .findById(req.params.id)
      .then(member => res.status(200).json(member))
      .catch(err => res.status(500).json(err))
  },
  create: (req, res) => {
    Member
      .create({
        name: req.body.name,
        address: req.body.address,
        zipcode: req.body.zipcode,
        email: req.body.email,
        phone: req.body.phone
      })
      .then(member => res.status(201).json(member))
      .catch(err => res.status(500).json(err))
  },
  update: (req, res) => {
    Member
      .replaceOne({
        _id: req.params.id
      }, {
        name: req.body.name,
        address: req.body.address,
        zipcode: req.body.zipcode,
        email: req.body.email,
        phone: req.body.phone
      })
      .then(query => res.status(200).json(query))
      .catch(err => res.status(500).json(err))
  },
  edit: (req, res) => {
    Member
      .findByIdAndUpdate(req.params.id, {
        $set: { ...req.body }
      }, {
        new: true
      })
      .then(member => res.status(200).json(member))
      .catch(err => res.status(500).json(err))
  },
  remove: (req, res) => {
    Member
      .findByIdAndRemove(req.params.id)
      .then(removed => res.status(200).json(removed))
      .catch(err => res.status(500).json(err))
  }
}