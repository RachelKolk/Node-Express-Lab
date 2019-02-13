import React, { Component } from 'react';

import Posts from './components/Posts';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>LOTL Quote Time!</h1>
        <Posts />
      </div>
    );
  }
}

export default App;
