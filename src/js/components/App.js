import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Carousel from './Carousel';
import NavFragment from './NavFragment';
import Characters from './Characters';

class App extends Component {
  componentDidMount() {
    document.getElementById('initial-spinner').remove();
  }

  render() {
    return (
      <div style={{color: "white"}}>
        <Carousel>
          <NavFragment characters={['cloud-strife', 'tifa-lockhart', 'barret-wallace']} />
          <NavFragment characters={['aerith-gainsborough', 'sephiroth', 'vincent-valentine']} />
        </Carousel>
        <Route exact path="/" component={() => <h3 className="info__header">Select a character</h3>}/>
        <Characters />
      </div>
    );
  }
}

export default App;