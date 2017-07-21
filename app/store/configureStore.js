import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

import { 
  createStore, 
  applyMiddleware,
  compose
} from 'redux';

// Log actions
const loggerMiddleware = createLogger();

// allows redux to know about our store
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);
// Create store with middleware
function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware, loggerMiddleware),
    enhancers
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export default configureStore;


/* REDUX
There is one store! - no many multiple states!
giant store -> holds one of our states
we update state with actions! 

actions (fired) gets dispatched! -> gets handled by reducers!
reducers are responsible for updating your state!
do not put asynchonous stuff in reducers! - reducers should be pure funcs that return immediately
    - use Redux Thunk or Saga for async calls to api, when data comes back -> export actions
*/



