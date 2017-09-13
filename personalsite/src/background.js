import React, {Component} from 'react';
import './App.css';

class Background extends Component {
  render() {
    return (
      <div className="App">
        <div className="body">
          <div className="stripe" id="first">
            <div className="stripe" id="second">
              <div className="stripe" id="third">
                <div className="stripe" id="fourth">
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
