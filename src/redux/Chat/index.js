import { GETTING_USERS, GETTING_USERS_FAILURE, GET_USERS } from './types';
const initialState = {
  users:[],
  loadingUsers:false,
  loadingUsersFailure:''
};

export default (state=initialState, action)=>{
  const { type, payload } = action;

  switch(type){
  case GET_USERS:
    return {
      ...state,
      users:payload,
      loadingUsers:false
    };
  case GETTING_USERS:
    return{
      ...state,
      loadingUsers:true
    };
  case GETTING_USERS_FAILURE:
    return{
      ...state,
      loadingUsersFailure:payload
    };
  default:
    return state;
  }
};
