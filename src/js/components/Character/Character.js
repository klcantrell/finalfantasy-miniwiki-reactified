import React, { Component } from 'react';
import LoadingSpinner from '../LoadingSpinner';

const formatName = name => {
  return name.replace('-', ' ');
};

class Character extends Component {
  componentDidMount() {
    const { syncPage, charactersData, match: { params: { characterName } } } = this.props;
    syncPage(charactersData[characterName].page);
  }

  render() {
    const { match: { params: { characterName } }, charactersData, getSpriteImg } = this.props;
    const { hometown, sprite, weapon, imgSrc } = charactersData[characterName];
    if (!imgSrc) {
      getSpriteImg(characterName, require(`../../../images/${sprite}`).src);
    }
    return (
      <div className="info">
        <h1 className="info__header">{formatName(characterName)}</h1>
        <div className="info__details">
          <div className="info__details-item">
            <h3>Hometown</h3>
            <p>{hometown}</p>
          </div>
          <div className="info__sprite">
            <h3>Original Sprite</h3>
            {imgSrc ? <img src={imgSrc} alt={sprite} /> : <LoadingSpinner />}
          </div>
          <div className="info__details-item">
            <h3>Default Weapon</h3>
            <p>{weapon}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Character;