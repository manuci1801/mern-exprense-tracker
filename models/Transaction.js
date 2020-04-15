const mongoose = require('mongoose')

const TransactionSchema = mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Text field is required']
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('transactions', TransactionSchema)