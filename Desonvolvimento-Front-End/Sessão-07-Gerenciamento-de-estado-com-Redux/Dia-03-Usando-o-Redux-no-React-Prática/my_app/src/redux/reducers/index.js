import { combineReducers } from 'redux';
import { TEST } from '../actions/actions-types';

const INITIAL_STATE = {
  test: '',
};

const submit = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TEST:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

const rootReducer = combineReducers({ submit });

export default rootReducer;
