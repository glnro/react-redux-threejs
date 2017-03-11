import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './CounterActions';
import Counter from './Counter.jsx';


const mapStateToProps = (state) => ({
  counter: state.counterReducer.counter
})

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {incrementCounter: actions.incrementCounter}, dispatch)

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)
(Counter);

export default CounterContainer;
