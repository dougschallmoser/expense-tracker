import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TransactionContextProvider } from '../contexts/TransactionContext';
import Transaction from '../components/Transaction';

describe('border edge color changes according to amount', () => {
  test('right border edge is green for positive amount', () => {
    const transaction = {
      id: 1,
      subject: 'Direct Deposit',
      amount: '2314.28'
    }

    render(<Transaction transaction={transaction} />, { wrapper: TransactionContextProvider })

    const listItem = screen.getByRole('listitem')
    expect(listItem).toHaveClass('plus')
  })

  test('right border edge is red for negative amount', () => {
    const transaction = {
      id: 1,
      subject: 'Groceries',
      amount: '-118.67'
    }

    render(<Transaction transaction={transaction} />, { wrapper: TransactionContextProvider })

    const listItem = screen.getByRole('listitem')
    expect(listItem).toHaveClass('minus')
  })
})

test('delete button click removes transaction from list', () => {
  const transaction = {
    id: 1,
    subject: 'Groceries',
    amount: '-118.67'
  }
  render(<Transaction transaction={transaction} />, { wrapper: TransactionContextProvider })

  const listItems = screen.getAllByRole('listitem')
  expect(listItems).toHaveLength(1)

  const topDeleteBtn = screen.getByRole('button', { name: 'x' })
  userEvent.click(topDeleteBtn)

  const listItemsUpdated = screen.getAllByRole('listitem')
  expect(listItemsUpdated).toHaveLength(0)
})