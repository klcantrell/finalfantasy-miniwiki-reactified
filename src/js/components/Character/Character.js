import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { getSprite } from '../../actionCreators';
import LoadingSpinner from '../LoadingSpinner';

const formatName = name => {
  return name.replace('-', ' ');
};

class Character extends Component {
  componentDidMount() {
    const { charactersData, match: { params: { characterName } } } = this.props;
  }

  render() {
    const { match: { params: { characterName } }, charactersData, getSprite, currentGame } = this.props;
    if (!charactersData[characterName]) {
      return <Redirect to={`/${currentGame}`} />
    }

    const { hometown, sprite, weapon, spriteSrc } = charactersData[characterName];
    if (!spriteSrc) {
      getSprite(characterName, require(`@/images/${currentGame}/${sprite}`).src);
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
            {spriteSrc ? <img src={spriteSrc} alt={sprite} /> : <LoadingSpinner />}
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

const mapStateToProps = ({charactersData, currentGame}) => {
  return {
    charactersData,
    currentGame,
  };
};

export default withRouter(connect(mapStateToProps, { getSprite })(Character));