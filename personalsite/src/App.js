import React, {Component} from 'react';
import './App.css';
import Background from './background.js';
import Nav from './navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background/>
<Nav />
      </div>
    );
  }
}

export default App;
