import React, { createContext, useReducer } from 'react';
import TransactionReducer from './TransactionReducer'
import { ApplicationState, ITransaction, ChildrenProps } from '../types';
// import axios from 'axios';

const storageTransactions = localStorage.getItem('transactions') ? JSON.parse(localStorage.getItem('transactions')!) : [] 

const initialState = {
  transactions: storageTransactions,
  loading: true
}

export const TransactionContext = createContext<ApplicationState>(initialState);

const asyncer = (dispatch: any, state: ApplicationState) => (action: any) =>
  typeof action === 'function' ? action(dispatch, state) : dispatch(action);

export const TransactionContextProvider = ({ children }: ChildrenProps) => {
  const [state, dispatchBase] = useReducer(TransactionReducer, initialState)

  const dispatch = asyncer(dispatchBase, state)

  // Actions
  function deleteTransaction(id: number) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  
  function addTransaction(transaction: ITransaction) {
    dispatch({
      type:'ADD_TRANSACTION',
      payload: transaction
    })
  }

  // Async Action
  // async function getTransactions() {
  //   try {
  //     const response = await axios.get('')
  //     dispatch({
  //       type: 'GET_TRANSACTIONS',
  //       payload: response.data.data
  //     })
  //   } catch (err) {
  //     dispatch({
  //       type: 'TRANSACTION_ERROR',
  //       payload: err.response.data.error
  //     })
  //   }
  // }

  return (
    <TransactionContext.Provider value={{
      transactions: state.transactions,
      addTransaction,
      deleteTransaction,
      // getTransactions,
      error: state.error,
      loading: state.loading

    }}>
      {children}
    </TransactionContext.Provider>
  )
}