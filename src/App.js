import React from 'react';
import './App.css';

// import components of Context API

// import { Header } from './Components/Header';
// import { Balance } from './Components/Balance';
// import { AccountSummary } from './Components/AccountSummary';
// import { TransactionHistory } from './Components/TransactionHistory';
// import { AddTransaction } from './Components/AddTransaction'
// import { GlobalProvider } from './Components/Context/GlobalState';

// function App() {
//   return (<div>
//     <GlobalProvider >
//     <Header />
//     <Balance />
//     <AccountSummary />
//     <TransactionHistory />
//     <AddTransaction />
//     </GlobalProvider>
//   </div>);
// }


// import components of Redux
import { Provider } from 'react-redux'
import { Header } from './ComponentsRedux/Header';
import { Balance } from './ComponentsRedux/Balance';
import { AccountSummary } from './ComponentsRedux/AccountSummary';
import { TransactionHistory } from './ComponentsRedux/TransactionHistory';
import { AddTransaction } from './ComponentsRedux/AddTransaction'
import store from './ComponentsRedux/store/Store';
function App() {
  return (<div>
    <Provider store={store}>
      <Header />
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />

    </Provider>
  </div>);
}

export default App;
