import 'babel-polyfill';
import React, {Component} from 'react';
import { Route, Router, Link, IndexRoute, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'; //Debug tool
import welcomeReducer from './welcome/welcomeReducer';
import CounterComponent from './counter/Counter';



export default class App extends Component {

  render() {

    return(
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={CounterComponent} />
        </Router>
      </div>

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
  document.querySelector('body'));
