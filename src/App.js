import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ Home } />
        <Route exact path="/private" component={ UserAccount } />
      </div>
    );
  }
}

export default App;
