import React, { createContext, useReducer } from 'react'
import axios from 'axios'

import AppReducer from './AppReducer'

// init state
const initState = {
  transactions: [],
  errors: [],
  loading: true
}

// create context
export const GlobalContext = createContext(initState)

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispath] = useReducer(AppReducer, initState)

  // actions
  async function getTransactions() {
    const res = await axios.get('/api/v1/transactions')

    dispath({
      type: 'GET_TRANSACTIONS',
      payload: res.data.data
    })
  }
  async function deleteTransaction(id) {
    await axios.delete(`/api/v1/transactions/${id}`)
    dispath({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  async function addNewTransaction(transaction) {
    const res = await axios.post('/api/v1/transactions', transaction)

    dispath({
      type: 'ADD_NEW_TRANSACTION',
      payload: res.data.data
    })
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    errors: state.errors,
    loading: state.loading,
    getTransactions,
    deleteTransaction,
    addNewTransaction
  }}>
    {children}
  </GlobalContext.Provider>)
}