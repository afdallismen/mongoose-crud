const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member'
  },
  in_date: Date,
  out_date: Date,
  due_date: Date,
  fine: Number,
  booklist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
})

transactionSchema.post('findOneAndUpdate', function (transaction) {
  const dayDiff = Math.ceil(
    Math.abs(
      new Date(transaction.in_date).getTime() - new Date(transaction.due_date).getTime()
    ) / (1000 * 3600 * 24)
  )

  if (transaction.in_date > transaction.due_date) {
    transaction.fine = 1000 * dayDiff
    transaction.save()
  }
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction