import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Characters from './Characters';

class App extends Component {

  render() {
    return (
      <div style={{color: "white"}}>
        <Nav />
        <Route exact path="/" component={() => <h3 className="info__header">Select a character</h3>}/>
        <Characters />
      </div>
    );
  }
}

export default App;