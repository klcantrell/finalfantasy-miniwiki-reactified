import React, { Component } from 'react';
import Character from './Character';

class Characters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characterData: this.props.data,
    };
  }

  render() {
    const { match: {params: { characterName } } } = this.props;
    const key = characterName.split('-')[0];
    const data = this.state.characterData[key];
    return <Character {...data} />
  }
}

export default Characters;