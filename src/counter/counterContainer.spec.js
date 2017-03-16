import React from 'react';
import {expect} from 'chai';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import sandbox from 'sinon';
const sinon = sandbox.create();

import CounterContainer from './CounterContainer';
import Counter from './Counter';

describe('<CounterContainer/>', () => {

  let initialState = {
    welcomeReducer: {},
    counterReducer: {
      counter: 0
    }
  }

  const mockStore = (state) => {
      return {
          dispatch: () => {},
          subscribe: () => {},
          getState: () => {
              return state;
          }
      }
    }

  const wrapper = mount(
      <Provider store={mockStore(initialState)}>
        <CounterContainer/>
      </Provider>
    )

  let CounterComponent = wrapper.find(CounterContainer).find(Counter);

  it('should map incrementCounter action to props', () => {
    expect(CounterComponent.props().incrementCounter).to.be.ok;
  })
})
