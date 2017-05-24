import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './profile.css';
import Profile from './profile.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
      </div>

    );
  }
}

export default App;
