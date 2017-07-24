import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';

// Log actions
const loggerMiddleware = createLogger();
// 
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

// const defaultState = {
//   count: 0
// }
// const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware), devTools)
// const configureStore = createStore(rootReducer, defaultState, enhancer);

// Create store with middleware
function configureStore(navReducer) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware), devTools)
  return createStore(rootReducer(navReducer), undefined, enhancer );
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

