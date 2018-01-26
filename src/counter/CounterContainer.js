import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {incrementCounter} from './CounterActions';
import Counter from './Counter.jsx';

const mapStateToProps = (state) => ({
  counterValue: state.counterReducer.counterValue
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  incrementCounter: incrementCounter }, dispatch);

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
