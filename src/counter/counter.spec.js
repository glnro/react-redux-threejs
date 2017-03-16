import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';


describe('Counter', () => {

  it('should render a counter button', () => {
    const wrapper = shallow(<Counter/>);
    expect(wrapper.find('.counter-button').type()).to.equal('button');
  });

  it('should render a 0 when initialized', () => {
    const props = {
      counterValue: 0,
      incrementCounter: sinon.spy()
    }
    const wrapper = mount(<Counter {...props} />);
    expect(wrapper.find('.counter-number').text()).to.equal('0');
  });

  it('should dispatch an increment action when clicked', () =>{
    const props = {
      counterValue: 1,
      incrementCounter: sinon.spy()
    }
    const wrapper = mount(<Counter {...props} />);
    wrapper.find('.counter-button').simulate('click');
    expect(props.incrementCounter.calledOnce).to.equal(true);
  })
})
