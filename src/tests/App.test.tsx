import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';

test('name of app displays on page', () => {
  render(<App />)
  
  const title = screen.getByRole('heading', { name: `Doug's Expense Tracker` })
  expect(title).toBeInTheDocument()
})

test('create transactions happy path', () => {
  render(<App />)

  const addTransactionBtn = screen.getByRole('button', { name: /add transaction/i })
  const incomeRadioBtn = screen.getByRole('radio', { name: /income/i })
  const expenseRadioBtn = screen.getByRole('radio', { name: /expense/i })
  const subjectInput = screen.getByRole('textbox', { name: /subject/i })
  const amountInput = screen.getByRole('textbox', { name: /amount/i })

  // create first transaction
  userEvent.type(subjectInput, 'Groceries')
  userEvent.type(amountInput, '118.19')
  userEvent.click(expenseRadioBtn)
  userEvent.click(addTransactionBtn)
  
  // create second transaction
  userEvent.type(subjectInput, 'Direct Deposit')
  userEvent.type(amountInput, '2301.02')
  userEvent.click(incomeRadioBtn)
  userEvent.click(addTransactionBtn)

  // assert transaction quantity to be 2
  const listItems = screen.getAllByRole('listitem')
  expect(listItems).toHaveLength(2)
})
