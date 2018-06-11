import React, { Component } from 'react';
import Character from './Character';

class Characters extends Component {
  state = {
    characterData: {
      cloud: {
        hometown: 'Nibelheim',
        sprite: 'Pic',
        weapon: 'Buster Sword',
      },
      barret: {
        hometown: 'Corel',
        sprite: 'Pic',
        weapon: 'Gatling Gun',
      },
      tifa: {
        hometown: 'Nibelheim',
        sprite: 'Pic',
        weapon: 'Leather Gloves',
      },
    }
  }

  render() {
    const { match: {params: { characterName } } } = this.props;
    const key = characterName.split('-')[0];
    const data = this.state.characterData[key];
    return <Character {...data} />
  }
}

export default Characters;