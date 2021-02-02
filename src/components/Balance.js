import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

function Balance() {

  const { transactions } = useContext(GlobalContext);

    const arrAmounts = transactions.map(transaction => transaction.amount)
    const total = arrAmounts.reduce((acc, curr) => (acc + curr), 0).toFixed(2)

  return (
    <div className="balance-container">
      <h4>YOUR BALANCE</h4>
      <h1>${total}</h1>
    </div>
  )
}

export default Balance;