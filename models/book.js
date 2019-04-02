const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
})

bookSchema.path('title').index({ text: true })
bookSchema.path('author').index({ text: true })

const Book = mongoose.model('Book', bookSchema)

module.exports = Book