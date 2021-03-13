import { render, screen } from '@testing-library/react';
import CreateTransaction from '../components/CreateTransaction';
import { TransactionContextProvider } from '../contexts/TransactionContext';

describe('buttons are disabled on initial loading', () => {
  test('income and expense radio buttons are unchecked', () => {
    render(<CreateTransaction />, { wrapper: TransactionContextProvider })
    
    const incomeRadioBtn = screen.getByRole('radio', { name: /income/i })
    const expenseRadioBtn = screen.getByRole('radio', { name: /expense/i })
    expect(incomeRadioBtn).not.toBeChecked()
    expect(expenseRadioBtn).not.toBeChecked()
  })
})