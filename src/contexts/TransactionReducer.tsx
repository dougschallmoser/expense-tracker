import { ApplicationState, StateAction, ITransaction, ActionType } from '../types';

const setStorage = (transactions: ITransaction[]) => {
  localStorage.setItem('transactions', JSON.stringify(transactions.length > 0 ? transactions : []))
}

function TransactionReducer(state: ApplicationState, action: StateAction) {
  switch (action.type) {
    case ActionType.Get:
      return {
        ...state,
        loading: false,
        transactions: action.payload
      }

    case ActionType.Delete:
      const removedTransaction = state.transactions.find(trans => trans.id !== action.payload);
      state.transactions.splice(state.transactions.indexOf(removedTransaction!), 1);
      setStorage(state.transactions);

      return {
        ...state,
        transactions: [...state.transactions]
      }

    case ActionType.Add:
      state.transactions.unshift(action.payload);
      setStorage(state.transactions);

      return {
        ...state,
        transactions: [...state.transactions]
      }

    case ActionType.Error:
      return {
        ...state,
        error: action.payload
      }

    default: 
      return state
  }
}

export default TransactionReducer;