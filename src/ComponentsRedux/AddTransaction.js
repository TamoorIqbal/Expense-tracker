import React, { useState} from 'react';
import store from './store/Store'

export const AddTransaction = () => {
    const [description, setdescription] = useState('');

    const [transactionAmount, settransactionAmount] = useState('');
   

    const onSubmit = (event) => {
        event.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        store.dispatch({
            type: "ADD_TRANSACTION",
            payload : newTransaction
        })
        console.log(newTransaction);
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
