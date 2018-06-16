import {
  GET_CHARACTER_DATA, 
  GET_CHARACTER_SPRITE, 
  UPDATE_PAGE,
  SYNC_APP,
} from './actionCreators';

import { paginateCharacterData } from './helpers';

const initialState = {
  currentGame: 'ff7',
  charactersData: undefined,
  activePage: 0,
  prevActive: undefined,
  urlOk: undefined,
};

const EXPECTED_GAMES = ['ff7', 'ff8'];

const PAGINATION_SCHEME = {
  'ff7': {
    'cloud-strife': 0,
    'tifa-lockhart': 0,
    'barret-wallace': 0,
    'sephiroth': 1,
    'aerith-gainsborough': 1,
    'vincent-valentine': 1,
  },
  'ff8': {
    'squall-leonhart': 0,
    'rinoa-heartilly': 0,
    'zell-dincht': 0,
    'quistis-trepe': 1,
    'seifer-almasy': 1,
    'selphie-tilmitt': 1,
  }
};

const characterApp = (state=initialState, action) => {
  switch(action.type) {
    case GET_CHARACTER_DATA:
      return { 
        ...state, 
        charactersData: paginateCharacterData(
          action.data[state.currentGame], 
          PAGINATION_SCHEME[state.currentGame]) 
        };
    case GET_CHARACTER_SPRITE:
      const characterData = {...state.charactersData[action.character]};
      characterData.spriteSrc = action.cacheUrl;
      const charactersData = { ...state.charactersData, [action.character]: characterData };
      return { ...state, charactersData, urlOk: true };
    case UPDATE_PAGE:
      return { ...state, activePage: action.pageNum, prevActive: state.activePage, urlOk: true };
    case SYNC_APP:
      const [ gameNameFragment, characterName ] = action.urlFragment.split('/').slice(1);
      const gameName = EXPECTED_GAMES.includes(gameNameFragment) ? gameNameFragment : state.currentGame;
      return { 
        ...state,
        urlOk: gameNameFragment ? EXPECTED_GAMES.includes(gameNameFragment) : undefined,
        currentGame: gameName,
        activePage: PAGINATION_SCHEME[gameName][characterName] || state.activePage, 
      };
    default:
      return state;
  }
};

export default characterApp;