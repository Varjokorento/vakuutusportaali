import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import FrontPage from './components/page_index';
import InsurancePage from './components/page_insurances';
import MyInsurances from './components/page_myinsurances';
import CountInsurances from './components/page_countinsurances';
import Navigation from './components/page_navigation';
import Login from './components/page_login';
import Register from './components/page_register';

ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/laskevakuutus" component={CountInsurances} />
        <Route path="/omavakuutus" component={MyInsurances} />
        <Route path="/vakuutukset" component={InsurancePage} />
        <Route path="/kirjaudu" component={Login} />
        <Route path="/rekisteroidy" component={Register} />
        <Route path="/" component={FrontPage} />
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid'));
