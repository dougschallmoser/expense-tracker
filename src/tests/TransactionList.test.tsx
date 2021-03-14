import { render, screen } from '@testing-library/react';
import TransactionList from '../components/TransactionList';
import { TransactionContextProvider } from '../contexts/TransactionContext';

test('message displays when there are no transactions', () => {
  render(<TransactionList />, { wrapper: TransactionContextProvider })

  const message = screen.getByText(/no transactions/i)
  expect(message).toBeInTheDocument()
})