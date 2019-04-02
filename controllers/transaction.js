const { ObjectId } = require('mongoose')
const { Transaction } = require('../models')

module.exports = {
  list: (req, res) => {
    let query = {}

    if (req.query.book) {
      query = { booklist: req.query.book }
    }

    Transaction
      .find(query)
      .then(transactions => res.status(200).json(transactions))
      .catch(err => res.status(500).json(err))
  },
  get: (req, res) => {
    Transaction
      .findById(req.params.id)
      .then(transaction => res.status(200).json(transaction))
      .catch(err => res.status(500).json(err))
  },
  create: (req, res) => {
    Transaction
      .create({
        member: req.body.member,
        in_date: req.body.in_date,
        out_date: req.body.out_date,
        due_date: req.body.due_date,
        fine: req.body.fine,
        booklist: req.body.booklist
      })
      .then(transaction => res.status(201).json(transaction))
      .catch(err => res.status(500).json(err))
  },
  update: (req, res) => {
    Transaction
      .replaceOne({
        _id: req.params.id
      }, {
        member: req.body.member,
        in_date: req.body.in_date,
        out_date: req.body.out_date,
        due_date: req.body.due_date,
        fine: req.body.fine,
        booklist: req.body.booklist
      })
      .then(query => res.status(200).json(query))
      .catch(err => res.status(500).json(err))
  },
  edit: (req, res) => {
    Transaction
      .findByIdAndUpdate(req.params.id, {
        $set: { ...req.body }
      }, {
        new: true,
        runValidators: true
      })
      .then(transaction => res.status(200).json(transaction))
      .catch(err => res.status(500).json(err))
  },
  remove: (req, res) => {
    Transaction
      .findByIdAndRemove(req.params.id)
      .then(removed => res.status(200).json(removed))
      .catch(err => res.status(500).json(err))
  }
}