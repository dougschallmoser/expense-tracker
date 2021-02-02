import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

function Transaction({ transaction }) {

  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? "-" : "+"

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.subject} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-transaction" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  )
}

export default Transaction;