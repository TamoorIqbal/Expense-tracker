import React from "react";
import { createStore } from "redux";

const initialState = {
    transactions: [
        { id: 1658348440603, description: 'Rent', transactionAmount: 5000 },
        { id: 1658348378985, description: 'Shopping', transactionAmount: -2000 },
        { id: 1658348337821, description: 'salary', transactionAmount: 8000 }
    ]
}
function transactionReducer(oldData = initialState, newData) {
    switch (newData.type) {
        case 'ADD_TRANSACTION':
            oldData.transactions.unshift(newData.payload)
            
        case 'DELET_TRANSACTION':
            oldData.transactions = oldData.transactions.filter((transaction)=>{
               return  transaction.id !== newData.payload;
                })
                case 'EDIT_TRANSACTION':
                    const updatedTransac = newData.payload;
                    const updatedTransaction = oldData.transactions.map((transaction) => {
                        if (transaction.id === updatedTransac.id) {
                            return updatedTransac;
                        }
                        return transaction;
                    });
        
                    return {
                        ...oldData,
                        transactions: updatedTransaction,
                    }; 

        
        default:
            return {transactions:[...oldData.transactions]};
    }

    // if(newData.type=='ADD_TRANSACTION'){
    //         oldaData.transactions.push(newData.payload)

    // }
    // else if(newData.type=='DELET_TRANSACTION'){
    //     oldaData.transactions.filter((transaction)=>{
    //                     return transaction.id != newData.payload
    //                 })
    // }
    // return {transactions:[...oldaData.transactions]};
}

const store = createStore(transactionReducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());
export default store;

