import React, { useState, useContext } from 'react';

// Import the Global State
import { GlobalContext } from './Context/GlobalState';

export const AddTransaction = () => {
    const [description, setdescription] = useState('');

    const [transactionAmount, settransactionAmount] = useState('');
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (event) => {
        event.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);
        setdescription("");
        settransactionAmount("");
    }


    return (
        <div>
            <h3>Add New Transction</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text"
                        id='description'
                        placeholder='Detail of Transaction'
                        value={description}
                        onChange={(event) => { setdescription(event.target.value) }}
                        required="required"
                    />
                </div>
                <div>
                    <label htmlFor="transaction">
                        Transaction Amount
                    </label>
                    <input type="number"
                        id='transaction'
                        placeholder='Transaction Amount'
                        value={transactionAmount}
                        onChange={(event) => { settransactionAmount(event.target.value) }}
                        required="required"
                    />
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}
