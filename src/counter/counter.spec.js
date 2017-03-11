import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';


describe('<Counter/>', () => {

  //initialize state with indexCounter
  //component should be rendering a counter object with the number and a button

  it('should render a counter button', () => {
    const wrapper = shallow(<Counter/>);
    expect(wrapper.find('.counter-button').type()).to.equal('button');
  });

  it('should render a 0 when initialized', () => {
    const wrapper = shallow(<Counter/>);
    expect(wrapper.find('.counter-number').text()).to.equal('0');
  });

  //TODO: implement
  // it('should render a 1 when clicked', () =>{
  //   const wrapper = shallow(<Counter/>);
  //   wrapper.find('.counter-button').simulate('click');
  //   expect(wrapper.find('.counter-number').text()).to.equal('1');
  // })
})
