import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import CreateTransaction from './CreateTransaction';
import { TransactionContextProvider } from '../contexts/TransactionContext';

function App() {
  return (
    <div className="main-container">
      <TransactionContextProvider>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <CreateTransaction />
      </TransactionContextProvider>
    </div>
  )
}

export default App;