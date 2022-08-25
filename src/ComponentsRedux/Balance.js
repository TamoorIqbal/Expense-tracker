import React from 'react'
import { useSelector } from 'react-redux';


export const Balance = () => {
  let totalBalance=0;
  const allTransactons = useSelector((data)=>{
    return data.transactions;
  })
  allTransactons.map((amount)=>{
    return totalBalance +=+amount.transactionAmount
  })
  return (<div className='container'>

    <h4>Current Balance</h4>
    <h1>${totalBalance}</h1>

  </div>
  )
}
