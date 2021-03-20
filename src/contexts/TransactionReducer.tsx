import { ApplicationState, Action, ITransaction, ActionType } from '../types';

const setStorage = (transactions: ITransaction[]) => {
  localStorage.setItem('transactions', JSON.stringify(transactions.length > 0 ? transactions : []))
}

function TransactionReducer(state: ApplicationState, action: Action) {
  switch (action.type) {
    case ActionType.DELETE:
      const removedTransaction = state.transactions.find(trans => trans.id === action.payload);
      state.transactions.splice(state.transactions.indexOf(removedTransaction!), 1);
      setStorage(state.transactions);

      return {
        ...state,
        transactions: [...state.transactions]
      }

    case ActionType.ADD:
      state.transactions.unshift(action.payload);
      setStorage(state.transactions);

      return {
        ...state,
        transactions: [...state.transactions]
      }
    // case ActionType.GET:
    //   return {
    //     ...state,
    //     loading: false,
    //     transactions: action.payload
    //   }
    // case ActionType.ERROR:
    //   return {
    //     ...state,
    //     error: action.payload
    //   }
    default: 
      return state
  }
}

export default TransactionReducer;