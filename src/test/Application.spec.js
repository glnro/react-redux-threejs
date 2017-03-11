import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import welcomeReducer from '../welcome/welcomeReducer';
import App from '../App';
import Index from '../index/Index.jsx';

describe('<App/>', () => {

  it('should render an Index component',() => {
    let mockState = () => {
      return( welcomeReducer: {} );
    }

    let mockStore = createStore(mockState());

    let wrapper = mount(
      <Provider store={mockStore}>
        <Index/>
      </Provider>);

    expect(wrapper.find('h1')).to.have.length(1);
  })
})
