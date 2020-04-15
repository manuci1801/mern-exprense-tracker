const router = require('express').Router()

const { getTransactions, addTransaction, deleteTransaction } = require('../controller/transactions')

router
  .route('/')
  .get(getTransactions)
  .post(addTransaction)

router
  .route('/:id')
  .delete(deleteTransaction)

module.exports = router