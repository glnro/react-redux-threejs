import React , { Component, PropTypes} from 'react';


export default class Counter extends Component {

  render(){
    const {incrementCounter, counterValue} = this.props

    return(
      <div>
        <button className="counter-button" onClick={incrementCounter}>+</button>
        <h5 className="counter-number">{counterValue}</h5>
      </div>
    )}
}
