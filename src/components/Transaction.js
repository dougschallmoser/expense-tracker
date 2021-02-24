import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

function Transaction({ transaction }) {

  const { deleteTransaction } = useContext(TransactionContext)

  const sign = transaction.amount < 0 ? "-" : "+"

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.subject} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button
        className="delete-transaction"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  )
}

export default Transaction;