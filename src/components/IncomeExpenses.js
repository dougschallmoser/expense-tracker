import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

function IncomeExpenses() {

  const { transactions } = useContext(TransactionContext);

  const amounts = transactions.map(transaction => transaction.amount)
  const income = amounts.filter(amount => amount > 0).reduce((acc, curr) => (acc + curr), 0).toFixed(2)
  const expenses = amounts.filter(amount => amount < 0).reduce((acc, curr) => (acc + curr), 0).toFixed(2)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>INCOME</h4>
        <p className="money plus">${Math.abs(income)}</p>
      </div>
      <div>
        <h4>EXPENSES</h4>
        <p className="money minus">${Math.abs(expenses)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses;