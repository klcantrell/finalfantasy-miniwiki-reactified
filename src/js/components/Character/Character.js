import React from 'react';

const formatName = name => {
  return name.replace('-', ' ');
};

const Character = ({ match: { params }, charactersData, getImg }) => {
  const { characterName } = params;
  const { hometown, sprite, weapon, imgSrc } = charactersData[characterName];
  if (!imgSrc) {
    getImg(characterName, require(`../../../images/${sprite}`).src);
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
          <img src={imgSrc || ''} alt={sprite} />
        </div>
        <div className="info__details-item">
          <h3>Default Weapon</h3>
          <p>{weapon}</p>
        </div>
      </div>
    </div>
  );
};

export default Character;