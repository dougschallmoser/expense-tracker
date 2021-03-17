import { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';
import { formatAmount } from '../utils/format';

function Balance(): JSX.Element {

  const { transactions } = useContext(TransactionContext);

    const arrAmounts: number[] = transactions.map(transaction => parseFloat(transaction.amount))
    const total: string = arrAmounts.reduce((acc, curr) => (acc + curr), 0).toFixed(2)
    const sign: string = parseFloat(total) < 0 ? "-" : ""

  return (
    <div className="balance-container">
      <h4>YOUR BALANCE</h4>
      <h1>{sign}${total[0] === "-" ? formatAmount(total).substring(1) : formatAmount(total)}</h1>
    </div>
  )
}

export default Balance;