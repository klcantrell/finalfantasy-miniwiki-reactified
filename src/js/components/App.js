import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Characters from './Characters';

class App extends Component {
  render() {
    return (
      <div style={{color: "white"}}>
        <Nav />
        <Route exact path="/" component={() => <p>Hello World</p>}/>
        <Route path="/:characterName" render={props => <Characters {...props} />}/>
      </div>
    );
  }
}

export default App;