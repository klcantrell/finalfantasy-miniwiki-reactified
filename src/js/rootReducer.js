import {
  GET_CHARACTER_DATA, 
  GET_CHARACTER_SPRITE, 
  UPDATE_PAGE,
} from './actionCreators';

import { paginateCharacterData } from './helpers';

const initialState = {
  charactersData: undefined,
  activePage: 0,
  prevActive: undefined,
};

const PAGINATION_SCHEME = {
  'cloud-strife': 0,
  'tifa-lockhart': 0,
  'barret-wallace': 0,
  'sephiroth': 1,
  'aerith-gainsborough': 1,
  'vincent-valentine': 1,
};

const characterApp = (state=initialState, action) => {
  switch(action.type) {
    case GET_CHARACTER_DATA:
      return { ...state, charactersData: paginateCharacterData(action.data, PAGINATION_SCHEME) };
    case GET_CHARACTER_SPRITE:
      const characterData = {...state.charactersData[action.character]};
      characterData.spriteSrc = action.cacheUrl;
      const charactersData = { ...state.charactersData, [action.character]: characterData };
      return { ...state, charactersData };
    case UPDATE_PAGE:
      const { activePage: oldActive } = state;
      return { ...state, activePage: action.pageNum, prevActive: oldActive };
    default:
      return state;
  }
};

export default characterApp;