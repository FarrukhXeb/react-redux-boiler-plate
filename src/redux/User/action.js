import { GETTING_USER, GET_USER, GETTING_USER_FAILED } from './types';
import http from '../../services/api';
export const getUserByName = (fullName)=>async (dispatch)=>{
  dispatch({ type:GETTING_USER });
  try {
    const { user } = http.get(`/user/${fullName}`);

    dispatch({ type:GET_USER, payload:user });
  } catch (error) {
    dispatch({ type:GETTING_USER_FAILED, payload: error.response?.data?.message || error.message });
  }
};
