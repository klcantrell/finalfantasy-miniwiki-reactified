import React from 'react';

const CharacterInfo = props => {
  const { match: {params : {characterName}} } = props;
  return (
    <p>{`${characterName} info`}</p>
  );
};

export default CharacterInfo;