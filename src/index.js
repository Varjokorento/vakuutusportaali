import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import FrontPage from './components/page_index';
import InsurancePage from './components/page_insurances';
import MyInsurances from './components/page_myinsurances';
import CountInsurances from './components/page_countinsurances';
import Navigation from './components/page_navigation';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/laskevakuutus" component={CountInsurances} />
        <Route path="/omavakuutus" component={MyInsurances} />
        <Route path="/vakuutukset" component={InsurancePage} />
        <Route path="/" component={FrontPage} />
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid'));
