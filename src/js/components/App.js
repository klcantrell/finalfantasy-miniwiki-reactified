import React, { Component } from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCharacterData, syncAppFromUrl } from '../actionCreators';
import GamePicker from './GamePicker';
import Carousel from './Carousel';
import NavFragment from './NavFragment';
import Character from './Character';
import LoadingSpinner from './LoadingSpinner';
import './App.css';

const getCharacterListOnPage = (charactersData, pageNum) => {
  return Object.keys(charactersData)
    .filter(c => charactersData[c].page === pageNum)
    .reduce((names, c) => [...names, c], []);
};

const removeDomNode = node => {
  node.parentNode && node.parentNode.removeChild(node);
};

class App extends Component {
  componentDidMount() {
    removeDomNode(document.getElementById('initial-spinner'));
    const { getCharacterData, syncAppFromUrl, location: { pathname } } = this.props;
    syncAppFromUrl(pathname);
    getCharacterData();
  }

  render() {
    const { allGameData, activePage, currentGame, urlOk } = this.props;
    return (
      <div className="ffminiwiki">
        {urlOk === false ? (
          <Switch>
            <Route exact path={`/${currentGame}`} component={() => null} />
            <Redirect from="/" to={`/${currentGame}`} />
          </Switch>
        ) :
          null}
        <GamePicker />
        {activePage !== undefined ?
          <Carousel>
            <NavFragment
              characters={allGameData ? getCharacterListOnPage(allGameData[currentGame], 0) : []} 
            />
            <NavFragment
              characters={allGameData ? getCharacterListOnPage(allGameData[currentGame], 1) : []} 
            />
          </Carousel> :
          null
        }
        <Switch>
          <Route exact path="/:gameName" component={() => <h3 className="instructions">Select a character</h3>}/>
          <Redirect exact from="/" to={`/${currentGame}`} />
        </Switch>
        {allGameData ? 
          <Route path="/:gameName/:characterName" component={Character} /> :
          <LoadingSpinner />}
      </div>
    );
  }
}

const mapStateToProps = ({activePage, prevActive, allGameData, currentGame, urlOk }) => {
  return {
    activePage,
    prevActive,
    allGameData,
    currentGame,
    urlOk,
  };
};

export default withRouter(connect(mapStateToProps, { getCharacterData, syncAppFromUrl })(App));