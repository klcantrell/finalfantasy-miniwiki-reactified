import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import CharacterInfo from './CharacterInfo';

class App extends Component {
  render() {
    return (
      <div style={{color: "white"}}>
        <nav>
          <Link to="/cloud-strife">Cloud Strife</Link>
          <Link to="/tifa-lockhart">Tifa Lockhart</Link>
        </nav>
        <Route exact path="/" component={() => <p>Hello World</p>}/>
        <Route path="/:characterName" render={props => <CharacterInfo {...props} />}/>
      </div>
    );
  }
}

export default App;