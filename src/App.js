import React, {Component} from 'react';
import './App.css';
import CounterContainer from './counter/CounterContainer';
import SceneContainer from './scene/SceneContainer';

class App extends Component {

  render(){
    return(
      <div className="App">
        <h1>Hello World</h1>
        <CounterContainer />
        <SceneContainer />
      </div>);
  }
}

export default App;
