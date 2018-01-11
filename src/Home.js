import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ Home } />
        <Route exact path="/private" component={ UserAccount } />
      </div>
    );
  }
}

export default Home;