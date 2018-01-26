import React, { Component } from 'react';

export default class Counter extends Component{

  render(){

    const {incrementCounter, counterValue} = this.props

    return(
      <div>
        <button className="increment-button" onClick={incrementCounter}>+</button>
        <h1>{counterValue}</h1>
      </div>
  )}
}
