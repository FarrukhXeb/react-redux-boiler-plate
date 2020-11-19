import http from '../../services/api';
import jwt_decode from 'jwt-decode';
import { storage } from '../../utils/storage';
import {
  AUTHENTICATING,
  AUTHENTICATION_FAILED,
  AUTHENTICATION_SUCCESS,
  SIGNING_UP,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
  CHECKING_AUTH,
  CHECKING_AUTH_FAILURE,
  CHECKING_AUTH_SUCCESS,
  LOGGING_OUT,
  LOGGING_OUT_FAILURE,
  LOG_OUT,
} from './types';

export const signUp = (data) => async (dispatch) => {
  dispatch({ type: SIGNING_UP });
  try {
    const res = await http.post('/auth/register', data);

    if (res.success) dispatch({ type: SIGN_UP_SUCCESS });
    else dispatch({ type: SIGN_UP_FAILED, payload: res.message });
  } catch (error) {
    dispatch({ type: SIGN_UP_FAILED, payload: error.message });
  }
};

export const logIn = (data) => async (dispatch) => {
  dispatch({ type: AUTHENTICATING });
  try {
    const res = await http.post('/auth/login', data);

    if (res.success) {
      storage.set('token', res.token);
      dispatch({ type: AUTHENTICATION_SUCCESS, payload: res.user });
    } else {
      dispatch({ type: AUTHENTICATION_FAILED, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: AUTHENTICATION_FAILED, payload: error.message });
  }
};

export const getLoginStatus = () => async (dispatch) => {
  dispatch({ type: CHECKING_AUTH });
  const token = storage.get('token');
  
  if (token) {
    const data = jwt_decode(token);

    if(data.exp>Date.now()) dispatch(logOut());
    else{
      const res = await http.get(`/user/${data._id}`);

      if(res.success)
        dispatch({ type: CHECKING_AUTH_SUCCESS, payload:res.user });
      else dispatch({ type:LOG_OUT });
    }

  } else
    dispatch({
      type: CHECKING_AUTH_FAILURE,
      payload: 'You are not authenticated',
    });
};

export const logOut = () => (dispatch) => {
  dispatch({ type: LOGGING_OUT });
  const token = storage.get('token');

  if (token) {
    storage.remove('token');
    dispatch({ type: LOG_OUT });
  } else
    dispatch({
      type: LOGGING_OUT_FAILURE,
      payload: 'You are already logged out',
    });
};
