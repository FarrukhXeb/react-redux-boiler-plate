import http from '../../services/api';
import {
  CREATING_PROFILE,
  CREATING_PROFILE_ERROR,
  CREATING_PROFILE_SUCCESS,
  GETTING_PROFILE,
  GETTING_PROFILE_FAILURE,
  GETTING_PROFILE_SUCCESS,
  PROFILE_RESET,
  UPDATING_PROFILE,
  UPDATING_PROFILE_ERROR,
  UPDATING_PROFILE_SUCCESS
} from './types';

export const createProfile = (data) => async (dispatch) => {
  dispatch({ type: CREATING_PROFILE });
  try {
    const { success, message, profile } = await http.post('/profile/create', data);

    if (success)
      dispatch({ type: CREATING_PROFILE_SUCCESS, payload: profile });
    else dispatch({ type: CREATING_PROFILE_ERROR, payload: message });
  } catch (error) {
    dispatch({
      type: CREATING_PROFILE_ERROR,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const getProfile = (fullName) => async (dispatch) => {
  dispatch({ type: GETTING_PROFILE });
  try {
    const { profile, success, message } = await http.get(
      `/profile/${fullName}`
    );

    if (success) dispatch({ type: GETTING_PROFILE_SUCCESS, payload: profile });
    else dispatch({ type: GETTING_PROFILE_FAILURE, payload: message });
  } catch (error) {
    dispatch({
      type: GETTING_PROFILE_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const updateProfile = (data)=>async (dispatch)=>{
  dispatch({ type:UPDATING_PROFILE });
  try {
    const { success, message, profile } = await http.patch('/profile', data);

    if (success)
      dispatch({ type: UPDATING_PROFILE_SUCCESS, payload: profile });
    else dispatch({ type: UPDATING_PROFILE_ERROR, payload: message });
  } catch (error) {
    dispatch({
      type: UPDATING_PROFILE_ERROR,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const resetProfile = () => async (dispatch) =>
  dispatch({ type: PROFILE_RESET });
