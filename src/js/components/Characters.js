import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Character from './Character';
import { fetchData, fetchImg } from '../utils';

class Characters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charactersData: undefined
    };
  }

  componentDidMount() {
    if (!this.state.charactersData) {
      fetchData('data/data.json')
        .then(res => {
          this.setState({
            charactersData: res,
          });
        });
    }
  }

  getCharacterImg = (character, imgUrl) => {
    fetchImg(imgUrl)
      .then(blob => {
        const charactersData = { ...this.state.charactersData };
        charactersData[character].imgSrc = URL.createObjectURL(blob);
        this.setState({
          charactersData,
        });
      });
  }

  render() {
    const { charactersData } = this.state;
    if (charactersData) {
      return (
        <Route path="/:characterName" render={props => <Character {...props} charactersData={charactersData} getImg={this.getCharacterImg} />}/> 
      );
    } else {
      return <div className="info">'Loading...'</div>;
    }
  }
}

export default Characters;