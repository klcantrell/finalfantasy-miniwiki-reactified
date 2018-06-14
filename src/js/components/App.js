import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Carousel from './Carousel';
import NavFragment from './NavFragment';
import Character from './Character';
import LoadingSpinner from './LoadingSpinner';

const PAGINATION_SCHEME = {
  'cloud-strife': 0,
  'tifa-lockhart': 0,
  'barret-wallace': 0,
  'sephiroth': 1,
  'aerith-gainsborough': 1,
  'vincent-valentine': 1,
};

class App extends Component {
  state = {
    charactersData: undefined,
    activePage: 0,
    prevActive: undefined
  }

  componentDidMount() {
    document.getElementById('initial-spinner').remove();
    if (!this.state.charactersData) {
      fetchData('data/data.json')
        .then(res => this.paginateCharacterData(res))
        .then(charactersData => {
          this.setState({
            charactersData,
          });
        });
    }
  }

  paginateCharacterData = data => {
    const characterKeys = Object.keys(data);
    return characterKeys.reduce((newCharacterData, key) => {
      newCharacterData[key] = {...data[key], page: PAGINATION_SCHEME[key]};
      return newCharacterData;
    }, {});
  }

  getCharacterSprite = (character, imgUrl) => {
    fetchImg(imgUrl)
      .then(blob => {
        const charactersData = { ...this.state.charactersData };
        charactersData[character].imgSrc = URL.createObjectURL(blob);
        this.setState({
          charactersData,
        });
      });
  }

  syncPage = pageNum => {
    this.setState(prevState => (
      {
        activePage: pageNum,
        prevActive: prevState.activePage,
      }
    ));
  }

  render() {
    const { activePage, prevActive, charactersData } = this.state;
    return (
      <div style={{color: "white"}}>
        <Carousel currentPage={activePage} prevPage={prevActive} syncPage={this.syncPage}>
          <NavFragment 
            characters={['cloud-strife', 'tifa-lockhart', 'barret-wallace']} 
          />
          <NavFragment 
            characters={['aerith-gainsborough', 'sephiroth', 'vincent-valentine']} 
          />
        </Carousel>
        <Route exact path="/" component={() => <h3 className="info__header">Select a character</h3>}/>
        {charactersData ? 
          <Route 
            path="/:characterName" 
            render={props => (
              <Character {...props} charactersData={charactersData} getSpriteImg={this.getCharacterSprite} syncPage={this.syncPage} /> 
            )}
          /> :
          <LoadingSpinner />}
      </div>
    );
  }
}

export default App;