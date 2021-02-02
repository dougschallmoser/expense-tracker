import React from 'react';
import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import CreateTransaction from './CreateTransaction';
import { GlobalProvider } from '../contexts/Store';

function App() {
  return (
    <div className="main-container">
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <CreateTransaction />
      </GlobalProvider>
    </div>
  )
}

export default App;