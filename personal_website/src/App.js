import React, { Component } from 'react';
import './App.css';
import './Components/profile.css';
import Profile from './Components/profile.js';

class App extends Component {
  constructor(){
    super();

    this.state={
      clicked: false
    }

    this.handleClick = function(e) {
      this.setState({
        // work_hover: false,
        clicked: true,
        // contact_hover: false,
      });
      console.log('about');
    }
  }

  render() {



    return (
      <div className="App">

      {!(this.state.clicked) ? (
        <div>
        <div className="centered" onClick={this.handleClick.bind(this)}>
        <div className="App-logo">
        *
        </div>
        Log In!
        </div>

        </div>) : " "}


      {this.state.clicked ? (<Profile/>) : " "}

      </div>

      );
  }
}

export default App;
