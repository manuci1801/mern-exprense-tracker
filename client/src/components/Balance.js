import React, { useContext } from 'react'
import { formatNumber } from '../utils/format'

import { GlobalContext } from '../context/GlobalContext'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const total = transactions.reduce((value, transaction) => value += transaction.amount, 0)
  const sign = total < 0 ? '-' : total !== 0 ? '+' : ''

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">{sign}${(formatNumber(Math.abs(total)))}</h1>
    </>
  )
}