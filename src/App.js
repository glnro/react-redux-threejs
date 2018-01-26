import React, {Component} from 'react';
import './App.css';
import CounterContainer from './counter/CounterContainer';

class App extends Component {

  render(){
    return(
      <div className="App">
        <h1>Hello World</h1>
        <CounterContainer />
      </div>);
  }
}

export default App;
