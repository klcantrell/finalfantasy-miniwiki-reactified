import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Characters from './Characters';
import { fetchData, fetchImg } from '../utils';

class App extends Component {
  componentDidMount() {
    fetchData('data/data.json')
      .then(res => {
        this.data = res;
      })
  }

  render() {
    return (
      <div style={{color: "white"}}>
        <Nav />
        <Route exact path="/" component={() => <p>Hello World</p>}/>
        <Route path="/:characterName" render={props => <Characters {...props} data={this.data} />}/>
      </div>
    );
  }
}

export default App;