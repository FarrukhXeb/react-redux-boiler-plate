import {
  AUTHENTICATING,
  AUTHENTICATION_FAILED,
  AUTHENTICATION_SUCCESS,
  CHECKING_AUTH,
  CHECKING_AUTH_FAILURE,
  CHECKING_AUTH_SUCCESS,
  LOGGING_OUT,
  LOGGING_OUT_FAILURE,
  LOG_OUT,
  SIGNING_UP,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
} from './types';

const initialState = {
  user: null,
  isAuthenticated: false,
  signingUp: false,
  authenticating: false,
  authenticationError: '',
  signingUpError: '',
  signUpSuccess: false,
  checkAuthError: '',
  checkingAuth: true,
  logOutFailure: '',
  loggingOut: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
  case SIGNING_UP:
    return {
      ...state,
      signingUp: true,
    };
  case SIGN_UP_SUCCESS:
    return {
      ...state,
      signingUp: false,
      signUpSuccess: true,
      signingUpError: '',
    };
  case SIGN_UP_FAILED:
    return {
      ...state,
      signingUp: false,
      signingUpError: payload,
    };
  case AUTHENTICATING:
    return {
      ...state,
      authenticating: true,
    };
  case AUTHENTICATION_SUCCESS:
    return {
      ...state,
      authenticating: false,
      isAuthenticated: true,
      authenticationError: '',
      checkAuthError:'',
      user: payload,
    };
  case AUTHENTICATION_FAILED:
    return {
      ...state,
      authenticating: false,
      authenticationError: payload,
      user: null,
    };
  case LOG_OUT:
    return {
      ...state,
      isAuthenticated: false,
      loggingOut: false,
      user: null,
    };
  case CHECKING_AUTH_FAILURE:
    return {
      ...state,
      checkAuthError: payload,
      checkingAuth: false,
    };
  case CHECKING_AUTH_SUCCESS:
    return {
      ...state,
      isAuthenticated: true,
      checkingAuth: false,
      user: payload,
    };
  case CHECKING_AUTH:
    return {
      ...state,
      checkingAuth: true,
    };
  case LOGGING_OUT_FAILURE:
    return {
      ...state,
      logOutFailure: payload,
      loggingOut: false,
    };
  case LOGGING_OUT:
    return {
      ...state,
      loggingOut: true,
    };
  default:
    return state;
  }
};
