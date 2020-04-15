const Transaction = require('../models/Transaction')

/**
 * @decs Get all transactions
 * @route GET api/v1/transactions
 * @access Public
 */
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()

    res.status(200).json({
      success: true,
      length: transactions.length,
      data: transactions
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      errors: ['Server Error']
    })
  }
}

/**
 * @decs Add a transactions
 * @route POST api/v1/transactions
 * @access Public
 */
const addTransaction = async (req, res) => {
  try {
    const { text, amount } = req.body

    const transaction = await Transaction.create({
      text,
      amount
    })

    res.status(201).json({
      success: true,
      data: transaction
    })
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message)
      return res.status(400).json({
        success: false,
        errors: messages
      })
    } else {
      return res.status(500).json({
        success: false,
        errors: ['Server Error']
      })
    }
  }
}

/**
 * @decs Delete a transactions
 * @route DELETE api/v1/transactions
 * @access Public
 */
const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params

    const transaction = await Transaction.findById(id)

    if (!transaction) {
      return res.status(404).json({
        success: false,
        errors: ['Transaction not found']
      })
    }

    await transaction.remove()
    res.status(200).json({
      success: true,
      data: {}
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      errors: ['Server Error']
    })
  }
}

module.exports = {
  getTransactions,
  addTransaction,
  deleteTransaction
}