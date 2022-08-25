import React  from 'react'
import { useSelector } from 'react-redux';
import store from './store/Store';
export const AccountSummary = () => {
    let Income =0;
    let Expence=0;
    let allTransactons=useSelector((store)=>{
        return store.transactions;
    })
    allTransactons.map((transaction)=>{
        if(transaction.transactionAmount>0){
          return  Income += +transaction.transactionAmount;
        }
        else{
          return  Expence += Math.abs(transaction.transactionAmount);
        }
    })

    return (<div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p className='money plus'>${Income}</p>
        </div>
        <div>
            <h4>Expence</h4>
            <p className='money minus'>-${Expence}</p>

        </div>
    </div>
    )
}
