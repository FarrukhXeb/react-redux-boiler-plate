import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// Reducers
import AuthReducer from './Auth';
import ProfileReducer from './Profile';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const rootReducer = (state, action)=>{
  if(action.payload==='Session expired. Please login again'){
    state ={};
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer
});

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middleware))
);

export default store;
