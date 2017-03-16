import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import welcomeReducer from '../welcome/welcomeReducer';
import counterReducer from '../counter/CounterReducer';
import App from '../App';
import Counter from '../counter/Counter.jsx';

describe('<App/>', () => {

  it('should render a Counter component',() => {

    const rootReducer = combineReducers({
      welcomeReducer,
      counterReducer,
    })

    let initialState = {
      welcomeReducer: {},
      counterReducer: {counterValue: 0}
    }

    const mockStore = () => {
      return (createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
      ))
    }

    let wrapper = mount(
      <Provider store={mockStore()}>
        <Counter/>
      </Provider>);

    expect(wrapper.find('div')).to.have.length(1);
  })
})
