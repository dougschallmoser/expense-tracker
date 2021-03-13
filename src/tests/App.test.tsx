import { render, screen } from '@testing-library/react';
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

