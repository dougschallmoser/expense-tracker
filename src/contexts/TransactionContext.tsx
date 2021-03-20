import { createContext, useReducer } from 'react';
import TransactionReducer from './TransactionReducer'
import { ApplicationState, ITransaction } from '../types';
import { ActionType } from './action-types';

const storageTransactions: ITransaction[] = localStorage.getItem('transactions') ? JSON.parse(localStorage.getItem('transactions')!) : [] 

const initialState = {
  transactions: storageTransactions,
  loading: true
}

export const TransactionContext = createContext<ApplicationState>(initialState);

export const TransactionContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState)

  function deleteTransaction(id: number) {
    dispatch({
      type: ActionType.DELETE,
      payload: id
    })
  }
  
  function addTransaction(transaction: ITransaction) {
    dispatch({
      type: ActionType.ADD,
      payload: transaction
    })
  }

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
      error: state.error,
      loading: state.loading

    }}>
      {children}
    </TransactionContext.Provider>
  )
}