import React from 'react';
import { useSelector } from 'react-redux';
import store from './store/Store'
export const Transaction = () => {

  const allTransactions = useSelector((store) => {
    return store.transactions;
  });
  // console.log(allTransactions);
  // var transactionType;
  // var sign;
  // allTransactions.map((transaction) => {
  //   transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';
  //   sign = transaction.transactionAmount > 0 ? '+' : '-';
   
  // })
  // console.log(transactionType);


  return (
    allTransactions.map((transaction) => {
      {
        return <li className={transaction.transactionAmount > 0 ? 'plus' : 'minus'}>

          {transaction.description}
          <span>{transaction.transactionAmount > 0 ? '+' : '-'}${Math.abs(transaction.transactionAmount)}</span>

          <button className='delete-btn'
            onClick={() => {
              store.dispatch({
                type: 'DELET_TRANSACTION',
                payload: transaction.id
              })
              // {alert(store.dispatch.payload)}
             
            }} >
            X
          </button>



          <button className='edit-btn'
            onClick={() => { 
              store.dispatch({
                type: 'EDIT_TRANSACTION',
                payload: transaction.id
              })
          
              let cuurentId = transaction.id;


              var newdesc = prompt("Description", transaction.description);
              var newamount = +prompt("Transaction Amount", +transaction.transactionAmount);
              console.log(cuurentId);
    
              transaction.description = newdesc;
              transaction.transactionAmount = newamount
    
            }

            }>
            Edit
          </button>

        </li>
      }
    }))
}
