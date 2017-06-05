import React, { Component } from 'react';
import './App.css';
import './Components/profile.css';
import Profile from './Components/profile.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <head>
      <title> Khem Marriott </title>
      </head>
        <Profile />
      </div>

    );
  }
}

export default App;
