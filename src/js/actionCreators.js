import { fetchData, fetchImg } from './helpers';

const GET_CHARACTER_DATA = "GET_CHARACTER_DATA";
const GET_CHARACTER_SPRITE = "GET_CHARACTER_SPRITE";
const UPDATE_PAGE = "UPDATE_PAGE";

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
    return fetchData('data/data.json')
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

export { 
  GET_CHARACTER_DATA, 
  GET_CHARACTER_SPRITE, 
  UPDATE_PAGE, 
  getCharacterData, 
  getSprite, 
  updatePage 
};