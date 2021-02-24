const setStorage = (transactions) => {
  localStorage.setItem('transactions', JSON.stringify(transactions.length > 0 ? transactions : []))
}

function TransactionReducer(state, action) {
  switch (action.type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload
      }

    case 'DELETE_TRANSACTION':
      const removedTransaction = state.transactions.find(trans => trans.id !== action.payload);
      state.transactions.splice(state.transactions.indexOf(removedTransaction), 1);
      setStorage(state.transactions);

      return {
        ...state,
        transactions: [...state.transactions]
      }

    case 'ADD_TRANSACTION':
      state.transactions.unshift(action.payload);
      setStorage(state.transactions);

      return {
        ...state,
        transactions: [...state.transactions]
      }

    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      }

    default: 
      return state
  }
}

export default TransactionReducer;