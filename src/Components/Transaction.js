import React from 'react';
// Import the Global State
import { GlobalContext } from './Context/GlobalState';
import { useContext } from 'react';
export const Transaction = ({ transaction }) => {
  const { delTransaction, editTransaction } = useContext(GlobalContext);


  const sign = transaction.transactionAmount > 0 ? '+' : '-';
  const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';


  return (
    <li className={transactionType}>
      {transaction.description}
      <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
      <button className='delete-btn'
        onClick={() => delTransaction(transaction.id)}>
        X
      </button>



      <button className='edit-btn'
        onClick={() => {
          console.log(transaction);
          editTransaction(transaction.id)
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
  )
}
