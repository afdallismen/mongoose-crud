const { Book } = require('../models')

module.exports = {
  list: (req, res) => {
    const { q } = req.query
    let query = {}

    if (q) {
      query = { $or: [
        { title: { $regex: new RegExp('.*' + q + '.*', 'i') }},
        { author: { $regex: new RegExp('.*' + q + '.*', 'i') }}
      ]}
    }

    Book
      .find(query)
      .then(books => res.status(200).json(books))
      .catch(err => res.status(500).json(err))
  },
  get: (req, res) => {
    Book
      .findById(req.params.id)
      .then(book => res.status(200).json(book))
      .catch(err => res.status(500).json(err))
  },
  create: (req, res) => {
    Book
      .create({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      })
      .then(book => res.status(201).json(book))
      .catch(err => res.status(500).json(err))
  },
  update: (req, res) => {
    Book
      .replaceOne({
        _id: req.params.id
      }, {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      })
      .then(query => res.status(200).json(query))
      .catch(err => res.status(500).json(err))
  },
  edit: (req, res) => {
    Book
      .findByIdAndUpdate(req.params.id, {
        $set: { ...req.body }
      }, {
        new: true
      })
      .then(book => res.status(200).json(book))
      .catch(err => res.status(500).json(err))
  },
  remove: (req, res) => {
    Book
      .findByIdAndRemove(req.params.id)
      .then(removed => res.status(200).json(removed))
      .catch(err => res.status(500).json(err))
  }
}