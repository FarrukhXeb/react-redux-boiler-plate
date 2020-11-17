import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// Reducers
import AuthReducer from './Auth';
import ProfileReducer from './Profile';
import UserReducer from './User';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// eslint-disable-next-line no-unused-vars
const myMiddleware = (store)=>(next)=>(action)=>{
  console.log('Testing myMiddleware()', store.getState());
  next(action);
};

const middleware = [thunk, myMiddleware];

const rootReducer = (state, action) => {
  if (action.payload === 'Session expired. Please login again') {
    state = {};
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
  user: UserReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middleware))
);

export default store;
