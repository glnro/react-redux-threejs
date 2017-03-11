import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import welcomeReducer from '../welcome/welcomeReducer';
import App from '../App';
import Counter from '../counter/Counter.jsx';

describe('<App/>', () => {

  it('should render a Counter component',() => {
    let mockState = () => {
      return( welcomeReducer: {} );
    }

    let mockStore = createStore(mockState());

    let wrapper = mount(
      <Provider store={mockStore}>
        <Counter/>
      </Provider>);

    expect(wrapper.find('div')).to.have.length(1);
  })
})
