// import * as actionTypes from '../redux/actionTypes.js';
import * as all from '../redux/actionTypes.js';
import { ADD_CURRENT_TIME } from './actionTypes.js';
import { CLEAR_CURRENT_TIMES } from './actionTypes.js';

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    // case actionTypes.ADD_CURRENT_TIME:
    // case ADD_CURRENT_TIME:
    case all.ADD_CURRENT_TIME:
      return [...state, action.payload];
    // case actionTypes.CLEAR_CURRENT_TIMES:
    case CLEAR_CURRENT_TIMES:
      return [];
    default:
      return state;
  }
}

export default reducer;
