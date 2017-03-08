import React, {Component} from 'react';
import { Route, Router, Link, IndexRoute, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'; //Debug tool
import welcomeReducer from './welcome/welcomeReducer';
import 'babel-polyfill';



class App extends Component {

  render() {

    return(
      <h1>Hello World</h1>
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
