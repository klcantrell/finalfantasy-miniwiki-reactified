import React, { Component } from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCharacterData, syncAppFromUrl } from '../actionCreators';
import Carousel from './Carousel';
import NavFragment from './NavFragment';
import Character from './Character';
import LoadingSpinner from './LoadingSpinner';

const getCharacterListOnPage = (charactersData, pageNum) => {
  const characterKeys = Object.keys(charactersData);

  return characterKeys
    .filter(c => charactersData[c].page === pageNum)
    .reduce((names, c) => [...names, c], []);
};

class App extends Component {
  componentDidMount() {
    document.getElementById('initial-spinner').remove();
    const { getCharacterData, syncAppFromUrl, location: { pathname } } = this.props;
    syncAppFromUrl(pathname);
    getCharacterData();
  }

  render() {
    const { charactersData, activePage, currentGame, urlOk } = this.props;
    return (
      <div className="ffminiwiki">
        {activePage !== undefined ?
          <Carousel>
            <NavFragment
              characters={charactersData ? getCharacterListOnPage(charactersData, 0) : []} 
            />
            <NavFragment
              characters={charactersData ? getCharacterListOnPage(charactersData, 1) : []} 
            />
          </Carousel> :
          null
        }
        {urlOk === false ? (
          <Switch>
            <Route exact path={`/${currentGame}`} component={() => null} />
            <Redirect from="/" to={`/${currentGame}`} />
          </Switch>
        ) :
          null}
        <Switch>
          <Route exact path="/:gameName" component={() => <h3 className="info__header">Select a character</h3>}/>
          <Redirect exact from="/" to={`/${currentGame}`} />
        </Switch>
        {charactersData ? 
          <Route path="/:gameName/:characterName" component={Character} /> :
          <LoadingSpinner />}
      </div>
    );
  }
}

const mapStateToProps = ({activePage, prevActive, charactersData, currentGame, urlOk }) => {
  return {
    activePage,
    prevActive,
    charactersData,
    currentGame,
    urlOk,
  };
};

export default withRouter(connect(mapStateToProps, { getCharacterData, syncAppFromUrl })(App));