import React, {Component} from 'react';
import { Route, Router, Link, IndexRoute, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'; //Debug tool
import welcomeReducer from './welcome/welcomeReducer';
import IndexComponent from './index/Index';
import 'babel-polyfill';



class App extends Component {

  render() {

    return(
      <Router history={browserHistory}>
        <Route path="/" component={IndexComponent} />
      </Router>
    )

  }
}

const logger = createLogger();

const store = createStore(
  welcomeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, logger)
);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#main')
);
