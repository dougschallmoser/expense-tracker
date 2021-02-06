import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import TransactionReducer from './TransactionReducer'

const initialState = {
  transactions: [],
  loading: true
}

export const TransactionContext = createContext(initialState);

export const TransactionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  
  function addTransaction(transaction) {
    dispatch({
      type:'ADD_TRANSACTION',
      payload: transaction
    })
  }

  // Async Action
  async function getTransactions() {
    try {
      const response = await axios.get('')
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: response.data.data
      })
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      })
    }
  }

  return (
    <TransactionContext.Provider value={{
      transactions: state.transactions,
      addTransaction,
      deleteTransaction,
      getTransactions,
      error: state.error,
      loading: state.loading

    }}>
      {children}
    </TransactionContext.Provider>
  )
}