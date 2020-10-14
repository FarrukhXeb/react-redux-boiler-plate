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
  UPDATING_PROFILE_SUCCESS,
} from './types';

const initialState = {
  creatingProfile: false,
  creatingProfileSuccess: false,
  creatingProfileError: null,
  gettingProfile: false,
  gettingProfileError: '',
  gettingProfileSuccess: false,
  updatingProfile:false,
  updatingProfileError:'',
  upadatingProfileSuccess:false,
  profile: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
  case CREATING_PROFILE:
    return {
      ...state,
      creatingProfile: true,
    };
  case CREATING_PROFILE_SUCCESS:
    return {
      ...state,
      creatingProfileSuccess: false,
      profile:payload
    };
  case CREATING_PROFILE_ERROR:
    return {
      ...state,
      creatingProfileError: payload,
      creatingProfile: false,
    };
  case GETTING_PROFILE:
    return {
      ...state,
      gettingProfile: true,
    };
  case GETTING_PROFILE_SUCCESS:
    return {
      ...state,
      gettingProfileSuccess: true,
      gettingProfile: false,
      profile: payload,
    };
  case GETTING_PROFILE_FAILURE:
    return {
      ...state,
      gettingProfileError: payload,
      gettingProfile: false,
    };
  case UPDATING_PROFILE:
    return {
      ...state,
      updatingProfile:true
    };
  case UPDATING_PROFILE_SUCCESS:
    return {
      ...state,
      updatingProfile:false,
      profile:payload
    };
  case UPDATING_PROFILE_ERROR:
    return {
      ...state,
      updatingProfile:false,
      updatingProfileError:payload
    };
  case PROFILE_RESET:
    return initialState;
  default:
    return state;
  }
};
