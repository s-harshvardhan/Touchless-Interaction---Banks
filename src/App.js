import React from 'react';
import CardReader from './components/CardReader';
import ErrorScreen from './components/ErrorScreen';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FacialRecognition from './components/FacialRecognition';
import ServiceSelector from './components/ServiceSelection';
import AccountMgmt from './components/AccountMgmt';
import CashWithdrawal from './components/CashWithdrawal';
import CashWithdrawal2 from './components/CashWithdrawal2';
// import CashDeposit from './components/CashDeposit';
import ChequeDeposit from './components/ChequeDeposit';
import ChequeDeposit2 from './components/ChequeDeposit2';
import ChequeDeposit3 from './components/ChequeDeposit3';
// import CurrencyExchange from './components/CurrencyExchange';
// import CoinCounter from './components/CoinCounter';
// import Trial from './components/Trial';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CardReader} />
        <Route exact path="/card-reader" component={CardReader} />
        <Route exact path="/error-screen" component={ErrorScreen} />
        <Route exact path="/facial-recognition" component={FacialRecognition} />
        <Route exact path="/service-selector" component={ServiceSelector} />
        <Route exact path="/account-mgmt" component={AccountMgmt} />
        <Route exact path="/cash-withdrawal" component={CashWithdrawal} />
        <Route exact path="/cash-withdrawal-2" component={CashWithdrawal2} />
        {/* <Route exact path="/cash-deposit" component={CashDeposit} /> */}
        <Route exact path="/cheque-deposit" component={ChequeDeposit} />
        <Route exact path="/cheque-deposit-2" component={ChequeDeposit2} />
        <Route exact path="/cheque-deposit-3" component={ChequeDeposit3} />
        {/* <Route exact path="/currency-exchange" component={CurrencyExchange} /> */}
        {/* <Route exact path="/coin-counter" component={CoinCounter} /> */}
        {/* <Route exact path="/trial" component={Trial} /> */}
        {/* Other routes */}
      </Switch>
    </Router>
  );
}

export default App;
