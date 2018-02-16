import { combineReducers } from 'redux';
import * as CONST from './constants';

const modal = (state = { visible: false }, action) => {
  switch (action.type) {
    case CONST.TRIGGER:
      return { visible: !state.visible, id: action.id };
    default:
      return state;
  }
};

const applesList = (state = [], action) => {
  switch (action.type) {
    case CONST.ADD_APPLE:
      return [
        {
          ...action.apple,
        },
        ...state,
      ];

    case CONST.ADD_APPLES:
      return action.apples;

    case CONST.EDIT_APPLE:
      return state.map(apple =>
        (apple.id === action.id ?
          { ...apple, ...action.apple } :
          apple),
      );

    case CONST.DELETE_APPLE:
      return state.filter(apple =>
        apple.id !== action.id,
      );

    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case CONST.START_REQUEST:
      return true;

    case CONST.STOP_REQUEST:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  applesList,
  modal,
  loading,
});
