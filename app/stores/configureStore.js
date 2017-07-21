import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

import { 
  createStore, 
  applyMiddleware, 
  combineReducers, 
  compose
} from 'redux';



