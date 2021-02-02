import React, { useState, useContext } from 'react';
import { GlobalContext } from '../contexts/Store';

function CreateTransaction() {

  const { addTransaction } = useContext(GlobalContext);

  const [transaction, setTransaction] = useState({
    subject: '',
    amount: ''
  })

  const handleChange = event => {
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
      amount: +transaction.amount
    }

    addTransaction(newObj)

    setTransaction({
      subject: '',
      amount: ''
    })
  }

  const disabled = transaction.subject === '' || transaction.amount === ''

  return (
    <>
      <h4>Add New Transaction</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Subject</label>
          <input type="text" name="subject" value={transaction.subject} onChange={handleChange} />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" name="amount" value={transaction.amount} onChange={handleChange} />
        </div>
        <button disabled={disabled} id="submit-btn">Add Transaction</button>
      </form>
    </>
  )
}

export default CreateTransaction;