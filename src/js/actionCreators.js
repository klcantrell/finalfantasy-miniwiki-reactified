import { fetchData, fetchImg, paginateCharacterData } from './helpers';
import { PAGINATION_SCHEME } from './rootReducer';

const GET_CHARACTER_DATA = "GET_CHARACTER_DATA";
const GET_CHARACTER_SPRITE = "GET_CHARACTER_SPRITE";
const UPDATE_PAGE = "UPDATE_PAGE";
const UPDATE_CURRENT_GAME = "UPDATE_CURRENT_GAME";
const SYNC_APP = "SYNC_PAGE";

function handleCharacterData(data) {
  return {
    type: GET_CHARACTER_DATA,
    data,
  };
}

function handleSprite(character, cacheUrl) {
  return {
    type: GET_CHARACTER_SPRITE,
    character,
    cacheUrl,
  };
}

function getCharacterData() {
  return dispatch => {
    return fetchData('/data/data.json')
      .then(res => {
        return Object.keys(res)
          .reduce((gameData, game) => {
            gameData[game] = paginateCharacterData(res[game], PAGINATION_SCHEME[game]);
            return gameData;
          }, {})
      })
      .then(res => dispatch(handleCharacterData(res)));
  }
}

function getSprite(character, imgUrl) {
  return dispatch => {
    fetchImg(imgUrl)
      .then(blob => {
        const cacheUrl = URL.createObjectURL(blob);
        dispatch(handleSprite(character, cacheUrl));
      });
  };
}

function updatePage(pageNum) {
  return {
    type: UPDATE_PAGE,
    pageNum,
  };
}

function updateGame(gameName) {
  return {
    type: UPDATE_CURRENT_GAME,
    gameName,
  };
}

function syncAppFromUrl(urlFragment) {
  return {
    type: SYNC_APP,
    urlFragment,
  };
}

export { 
  GET_CHARACTER_DATA, 
  GET_CHARACTER_SPRITE, 
  UPDATE_PAGE,
  UPDATE_CURRENT_GAME,
  SYNC_APP,
  getCharacterData, 
  getSprite,
  updatePage,
  updateGame,
  syncAppFromUrl,
};