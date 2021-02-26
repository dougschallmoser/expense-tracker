import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';
import { numberWithCommas } from '../utils/format';

function Balance() {

  const { transactions } = useContext(TransactionContext);

    const arrAmounts: number[] = transactions.map(transaction => parseInt(transaction.amount))
    const total: string = arrAmounts.reduce((acc, curr) => (acc + curr), 0).toFixed(2)

  return (
    <div className="balance-container">
      <h4>YOUR BALANCE</h4>
      <h1>${numberWithCommas(parseInt(total))}</h1>
    </div>
  )
}

export default Balance;