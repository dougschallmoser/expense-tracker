import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

function IncomeExpenses() {

  const { transactions } = useContext(TransactionContext);

  const amounts: number[] = transactions.map(transaction => parseInt(transaction.amount))
  const income: string = amounts.filter(amount => amount > 0).reduce((acc, curr) => (acc + curr), 0).toFixed(2)
  const expenses: string = amounts.filter(amount => amount < 0).reduce((acc, curr) => (acc + curr), 0).toFixed(2)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>INCOME</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>EXPENSES</h4>
        <p className="money minus">${expenses}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses;