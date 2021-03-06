import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateGame } from '../../actionCreators';
import './GamePicker.css';

const GamePicker = ({currentGame, expectedGames, updateGame, history}) => {
  const handleChange = e => {
    updateGame(e.target.value);
    history.push(`/${e.target.value}`);
  };

  return (
    <div className="game-picker-container">
      <select className="game-picker" value={currentGame} onChange={handleChange}>
        {expectedGames.map((g, i) => (
          <option key={i} value={g}>{g}</option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = ({currentGame, expectedGames}) => {
  return {
    currentGame,
    expectedGames,
  };
}

export default withRouter(connect(mapStateToProps, { updateGame })(GamePicker));