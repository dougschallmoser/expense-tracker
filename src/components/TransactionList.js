import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../contexts/Store';

function TransactionList() {

  const { transactions } = useContext(GlobalContext);

  const renderTransactions = transactions.map(transaction => {
    return (
      <Transaction key={transaction.id} transaction={transaction} />
    )
  })

  return (
    <>
      <h4>History</h4>
      <hr />
      <ul className="transaction-list">
        {!transactions.length && <div>No transactions.</div>}
        {renderTransactions}
      </ul>
    </>
  )
}

export default TransactionList;