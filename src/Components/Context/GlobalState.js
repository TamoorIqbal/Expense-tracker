import React, { createContext, useReducer } from "react";
import reducer from './Reducer'



const initialState = {
    transactions: [
        { id: 1658348440603, description: 'Rent', transactionAmount: 5000 },
        { id: 1658348378985, description: 'Shopping', transactionAmount: -2000 },
        { id: 1658348337821, description: 'salary', transactionAmount: 8000 }
    ]
}




//create Globel context
export const GlobalContext = createContext(initialState)

//create a Provider for Global Context 
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    // Actions for Transactions

    // Delete Existing Transaction Action
    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    // Add New Transaction Action
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    //Edit Description and Amount
    function editTransaction(transaction) {
        dispatch({
            type: 'EDIT_TRANSACTION',
            payload: transaction
        });
    }
    console.log("state", state)

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction,
                editTransaction
            }
        }>{children}
        </GlobalContext.Provider>
    );
}