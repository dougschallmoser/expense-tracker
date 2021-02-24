import React, { useState, useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

function CreateTransaction() {

  const { addTransaction } = useContext(TransactionContext);

  const [transaction, setTransaction] = useState({
    subject: '',
    amount: '',
    type: ''
  })

  const handleChange = event => {
    if (event.target.name === 'amount') {
      const regexPattern = /^(\d+(\.\d{0,2})?|\.?\d{1,2})$/
      if (!regexPattern.test(event.target.value)) {
        return
      }

    }

    setTransaction({
      ...transaction,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    
    const newObj = {
      id: Math.floor(Math.random() * 100000000),
      subject: transaction.subject,
      amount: transaction.type === "income-type" ? +transaction.amount : +transaction.amount * -1
    }

    addTransaction(newObj)

    setTransaction({
      subject: '',
      amount: ''
    })
  }

  const disabled = transaction.subject === '' || transaction.amount === '' || transaction.type === ''

  return (
    <>
      <h4>Add New Transaction</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Subject:</label>
          <input type="text" name="subject" placeholder="What was this for?" value={transaction.subject} onChange={handleChange} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="text" min="0" placeholder="Enter positive dollar amount" name="amount" value={transaction.amount} onChange={handleChange} />
        </div>
        <h4>Is this income or an expense?</h4>
        <div className="amount-type">
          <input type="radio" id="income-type" name="type" value="income-type" onChange={handleChange} checked={transaction.type === "income-type"} />
          <label htmlFor="income-type">Income (+)</label>
        </div>
        <div className="amount-type">
          <input type="radio" id="expense-type" name="type" value="expense-type" onChange={handleChange} checked={transaction.type === "expense-type"} />
          <label htmlFor="expense-type">Expense (-)</label>
        </div>
        <button disabled={disabled} id="submit-btn">Add Transaction</button>
      </form>
    </>
  )
}

export default CreateTransaction;