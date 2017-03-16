import { expect } from 'chai';
import counterReducer from './CounterReducer';

describe('Counter Reducer', () => {

  it('increments the counter value by one when INCREMENT_COUNTER is received', () => {
    let initialState = {
      counterValue: 0
    }

    const incrementAction = {
      type: 'INCREMENT_COUNTER'
    }

    expect(counterReducer(initialState,incrementAction).counterValue).to.eql(1)
  })
})
