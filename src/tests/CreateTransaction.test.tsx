import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateTransaction from '../components/CreateTransaction';
import { TransactionContextProvider } from '../contexts/TransactionContext';

describe('income and expense radio buttons function properly', () => {
  test('income and expense radio buttons are unchecked initially', () => {
    render(<CreateTransaction />, { wrapper: TransactionContextProvider })
    
    const incomeRadioBtn = screen.getByRole('radio', { name: /income/i })
    const expenseRadioBtn = screen.getByRole('radio', { name: /expense/i })
    expect(incomeRadioBtn).not.toBeChecked()
    expect(expenseRadioBtn).not.toBeChecked()
  })

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

describe('add transaction button functions properly', () => {
  test('add transaction button is initially disabled', () => {
    render(<CreateTransaction />, { wrapper: TransactionContextProvider })

    const addTransactionBtn = screen.getByRole('button', { name: /add transaction/i })
    expect(addTransactionBtn).toBeDisabled()
  })

  test('add transaction button is enabled when inputs are valid', () => {
    render(<CreateTransaction />, { wrapper: TransactionContextProvider })

    const addTransactionBtn = screen.getByRole('button', { name: /add transaction/i })
    const expenseRadioBtn = screen.getByRole('radio', { name: /expense/i })
    const subjectInput = screen.getByRole('textbox', { name: /subject/i })
    const amountInput = screen.getByRole('textbox', { name: /amount/i })

    // add input to subject, amount, and amount type
    userEvent.type(subjectInput, 'food')
    userEvent.type(amountInput, '34.19')
    userEvent.click(expenseRadioBtn)
    
    expect(addTransactionBtn).toBeEnabled()
  })
})