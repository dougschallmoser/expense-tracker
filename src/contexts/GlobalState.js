import React, { createContext, useReducer } from 'react';
import AppReducer from '../reducers/AppReducer'

const initialState = {
  transactions: [
    // { id: 1, subject: 'Flower', amount: -20 },
    // { id: 2, subject: 'Salary', amount: 300 },
    // { id: 3, subject: 'Book', amount: -10 },
    // { id: 4, subject: 'Camera', amount: 150 }
  ]
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

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      addTransaction,
      deleteTransaction

    }}>
      {children}
    </GlobalContext.Provider>
  )
}