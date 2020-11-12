import { GETTING_USER, GET_USER, GETTING_USER_FAILED } from './types';

const initialState = {
  user: null,
  gettingUser: false,
  gettingUserFailed: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
  case GETTING_USER:
    return {
      ...state,
      gettingUser: true,
    };
  case GET_USER:
    return {
      ...state,
      user: payload,
      gettingUser: false,
    };
  case GETTING_USER_FAILED:
    return {
      ...state,
      gettingUserFailed: payload,
      gettingUser: false,
    };
  default:
    return state;
  }
};
