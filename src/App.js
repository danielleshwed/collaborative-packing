import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Dashboard />
      </div>
    );
  }
}

export default App;
