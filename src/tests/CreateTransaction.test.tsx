import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('add transaction button is disabled', () => {
    render(<CreateTransaction />, { wrapper: TransactionContextProvider })

    const addTransactionBtn = screen.getByRole('button', { name: /add transaction/i })
    expect(addTransactionBtn).toBeDisabled()
  })
})

describe('buttons are enabled when form is correctly filled out', () => {
  test('income and expense radio buttons are checked when click', () => {
    render(<CreateTransaction />, { wrapper: TransactionContextProvider })

    const incomeRadioBtn = screen.getByRole('radio', { name: /income/i })
    const expenseRadioBtn = screen.getByRole('radio', { name: /expense/i })

    // check income radio button
    userEvent.click(incomeRadioBtn)
    expect(incomeRadioBtn).toBeChecked()

    // check expense radio button
    userEvent.click(expenseRadioBtn)
    expect(expenseRadioBtn).toBeChecked()
    expect(incomeRadioBtn).not.toBeChecked()
  })
})