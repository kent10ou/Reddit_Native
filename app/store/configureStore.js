import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

import { createStore, applyMiddleware, compose } from 'redux';

// Log actions
const loggerMiddleware = createLogger();
// 
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

// Create store with middleware
function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware), devTools)
  return createStore(rootReducer, initialState, enhancer );
}


export default configureStore;


/* REDUX
There is one store! - no many multiple states!
giant store -> holds one of our states
we update state with actions! 

actions (fired) gets dispatched! -> gets handled by reducers!
reducers are responsible for updating your state!
do not put asynchonous stuff in reducers! - reducers should be pure funcs that return immediately
    - use Redux Thunk for async calls to api, when data comes back -> export actions
*/



