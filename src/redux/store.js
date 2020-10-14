import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// Reducers
import AuthReducer from './Auth';
import ProfileReducer from './Profile';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const reducers = {
  auth: AuthReducer,
  profile: ProfileReducer
};

const store = createStore(
  combineReducers({ ...reducers }),
  composeEnhancer(applyMiddleware(...middleware))
);

export default store;
