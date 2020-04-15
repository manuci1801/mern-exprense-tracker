import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'

export const AddNewTransaction = () => {
  const { addNewTransaction } = useContext(GlobalContext)

  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    addNewTransaction({ text, amount: +amount })
    setText('')
    setAmount('')
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." value={text} onChange={e => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
        (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
