import {
  GET_CHARACTER_DATA, 
  GET_CHARACTER_SPRITE, 
  UPDATE_PAGE,
  UPDATE_CURRENT_GAME,
  SYNC_APP,
} from './actionCreators';

const initialState = {
  allGameData: undefined,
  expectedGames: ['ff7', 'ff8'], 
  currentGame: 'ff7',
  activePage: 0,
  prevActive: undefined,
  urlOk: undefined,
};

export const PAGINATION_SCHEME = {
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
        allGameData: action.data,
        charactersData: action.data[state.currentGame],
      };
    case GET_CHARACTER_SPRITE:
      const characterData = {...state.allGameData[state.currentGame][action.character], spriteSrc: action.cacheUrl};
      const currentGameData = { ...state.allGameData[state.currentGame], [action.character]: characterData };
      const allGameData = { ...state.allGameData, [state.currentGame]: currentGameData };
      return { ...state, allGameData, urlOk: true };
    case UPDATE_PAGE:
      return { 
        ...state, 
        activePage: action.pageNum,
        prevActive: state.activePage,
        urlOk: true
      };
    case UPDATE_CURRENT_GAME:
      return { 
        ...state,
        activePage: 0,
        prevActive: undefined,
        currentGame: action.gameName,
      };
    case SYNC_APP:
      const [ gameNameFragment, characterName ] = action.urlFragment.split('/').slice(1);
      const gameName = state.expectedGames.includes(gameNameFragment) ? gameNameFragment : state.currentGame;
      return { 
        ...state,
        urlOk: gameNameFragment ? state.expectedGames.includes(gameNameFragment) : undefined,
        currentGame: gameName,
        activePage: PAGINATION_SCHEME[gameName][characterName] || state.activePage, 
      };
    default:
      return state;
  }
};

export default characterApp;