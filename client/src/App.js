import React, { Component } from 'react';
import './App.css';
import PodsContainer from './components/PodsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pods Container</h1>
        </header>
        <br />
        <PodsContainer />
      </div>
    );
  }
}

export default App;
