import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCharacterData } from '../actionCreators';
import Carousel from './Carousel';
import NavFragment from './NavFragment';
import Character from './Character';
import LoadingSpinner from './LoadingSpinner';

class App extends Component {
  componentDidMount() {
    document.getElementById('initial-spinner').remove();
    this.props.getCharacterData();
  }

  render() {
    const { charactersData } = this.props;
    return (
      <div style={{color: "white"}}>
        <Carousel>
          <NavFragment 
            characters={['cloud-strife', 'tifa-lockhart', 'barret-wallace']} 
          />
          <NavFragment 
            characters={['aerith-gainsborough', 'sephiroth', 'vincent-valentine']} 
          />
        </Carousel>
        <Route exact path="/" component={() => <h3 className="info__header">Select a character</h3>}/>
        {charactersData ? 
          <Route path="/:characterName" component={Character} /> :
          <LoadingSpinner />}
      </div>
    );
  }
}

const mapStateToProps = ({activePage, prevActive, charactersData}) => {
  return {
    activePage,
    prevActive,
    charactersData,
  };
};

export default withRouter(connect(mapStateToProps, { getCharacterData })(App));