import React, { useContext } from 'react'
import { formatNumber } from '../utils/format'

import { GlobalContext } from '../context/GlobalContext'

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const incomes = transactions.reduce((value, transaction) => {
    return transaction.amount > 0 ? value += transaction.amount : value
  }, 0).toFixed(2)
  const expenses = transactions.reduce((value, transaction) => {
    return transaction.amount < 0 ? value += transaction.amount : value
  }, 0).toFixed(2)

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${formatNumber(Math.abs(incomes))}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${formatNumber(Math.abs(expenses))}</p>
        </div>
      </div>
    </>
  )
}
