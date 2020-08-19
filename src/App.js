import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppBar from './pages/partials/appBar';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import BankPage from './pages/BankPage';
import FundTransferPage from './pages/FundTransferPage';
import CashWithdrawalPage from './pages/CashWithdrawalPage';
import LogoutPage from './pages/LogoutPage';
import NotFound from './pages/notFound';
import './App.css';

const App = () => (
  <React.Fragment>
      <AppBar.AppHeader />
          <Switch>
              <Route path="/" exact><Redirect to="/login" /></Route>
              <Route path="/login" component={LoginPage} exact></Route>
              <Route path="/dashboard" component={DashboardPage} exact></Route>
              <Route path="/bank" component={BankPage} exact></Route>
              <Route path="/fund-transfer" component={FundTransferPage} exact></Route>
              <Route path="/cash-withdrawal" component={CashWithdrawalPage} exact></Route>
              <Route path="/logout" component={LogoutPage} exact></Route>
              <Route component={NotFound}></Route>
          </Switch>
      <AppBar.AppFooter />
  </React.Fragment>
);

export default App;
