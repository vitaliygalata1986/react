import getCurrentTime from '../utils/getCurrentTime.js';
// import { ADD_CURRENT_TIME, CLEAR_CURRENT_TIMES } from './actionTypes.js';
import * as actionTypes from './actionTypes.js';
// функция будет возвращать объект, который ялвяется действием
// функции будут возвращать действия - поэтому и называется actionCreators

export function addCurrentTime() {
  return {
    type: actionTypes.ADD_CURRENT_TIME,
    payload: getCurrentTime(),
  };
}

export function clearTimes() {
  return {
    type: actionTypes.CLEAR_CURRENT_TIMES,
  };
}
