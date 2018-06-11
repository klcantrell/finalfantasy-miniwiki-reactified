import React from 'react';

const Character = ({hometown, sprite, weapon}) => {
  return (
    <div>
      <p>{hometown}</p>
      <img alt={sprite} />
      <p>{weapon}</p>
    </div>
  );
};

export default Character;