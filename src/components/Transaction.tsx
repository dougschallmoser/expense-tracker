import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';
import { ITransaction } from '../types';

type Props = {
  transaction: ITransaction
}

function Transaction({ transaction }: Props) {


  const { deleteTransaction } = useContext(TransactionContext)
  const sign: string = parseInt(transaction.amount) < 0 ? "-" : "+"


  return (
    <li className={parseInt(transaction.amount) < 0 ? "minus" : "plus"}>
      {transaction.subject} <span>{sign}${transaction.amount}</span>
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