import React, {Component} from 'react';
import './App.css';
import Background from './background.js';
import Mav from './navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background/>
        <Mav />
      </div>
    );
  }
}

export default App;
