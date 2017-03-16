import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {sandbox} from 'sinon';
const sinon = sandbox.create();
import * as actions from './CounterActions';

describe('Counter Actions', () => {

  it('should dispatch an action to increment the counter', () => {

    const expectedAction = {
      type: 'INCREMENT_COUNTER'
    }

    expect(actions.incrementCounter()).to.eql(expectedAction);
  })
})
