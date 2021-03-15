import { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';
import { ITransaction } from '../types';

type Props = {
  transaction: ITransaction
}

function Transaction({ transaction }: Props) {

  const { deleteTransaction } = useContext(TransactionContext)
  const sign: string = parseFloat(transaction.amount) < 0 ? "-" : "+"
  const amount: string = parseFloat(transaction.amount).toFixed(2);

  return (
    <li className={parseInt(amount) < 0 ? "minus" : "plus"}>
      {transaction.subject} <span>{sign}${amount[0] === "-" ? amount.substring(1) : amount}</span>
      <button
        className="delete-transaction"
        onClick={() => deleteTransaction!(transaction.id)}
      >
        x
      </button>
    </li>
  )
}

export default Transaction;