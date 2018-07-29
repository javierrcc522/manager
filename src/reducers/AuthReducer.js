import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: ''};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
      // return a brand new object otherwise redux is going to think is the same object
    default:
      return state;
  }
};
