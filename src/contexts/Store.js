import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer'

const initialState = {
  transactions: [],
  loading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

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
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      addTransaction,
      deleteTransaction,
      getTransactions,
      error: state.error,
      loading: state.loading

    }}>
      {children}
    </GlobalContext.Provider>
  )
}