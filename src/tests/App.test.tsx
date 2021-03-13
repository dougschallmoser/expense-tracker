import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';
import { formatAmount } from '../utils/format';

test('name of app displays on page', () => {
  render(<App />)
  
  const title = screen.getByRole('heading', { name: `Doug's Expense Tracker` })
  expect(title).toBeInTheDocument()
})

test('formatAmount function correctly formats currency with commas', () => {
  const inputAmt = '4321.67'
  const formattedAmt = formatAmount(inputAmt)
  expect(formattedAmt).toBe('4,321.67')

  const inputAmtTwo = '121870.02'
  const formattedAmtTwo = formatAmount(inputAmtTwo)
  expect(formattedAmtTwo).toBe('121,870.02')
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

  // delete most recently added transaction
  const topDeleteBtn = screen.getAllByRole('button', { name: 'x' })[0]
  userEvent.click(topDeleteBtn)

  // assert transaction quantity to be 1
  const newListItems = screen.getAllByRole('listitem')
  expect(newListItems).toHaveLength(1)
})
