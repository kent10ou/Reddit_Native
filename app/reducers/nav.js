import { NavigationActions } from 'react-navigation';
import { RedditRouter } from '../router/Router';
import { POST_DETAIL } from '../actions/actionCreators';

// const initialNavState = RedditRouter.router.getStateForAction('RedditNative');

// function nav(state = initialNavState, action) {
//   let nextState;
//   switch (action.type) {
//     case 'Login':
//       nextState = AppNavigator.router.getStateForAction(
//         NavigationActions.back(),
//         state
//       );
//       break;
//     case POST_DETAIL:
//       nextState = AppNavigator.router.getStateForAction(
//         NavigationActions.navigate({ routeName: 'PostDetail' }),
//         state
//       );
//       break;
//     default:
//       nextState = AppNavigator.router.getStateForAction(action, state);
//       break;
//   }

//   // Simply return the original `state` if `nextState` is null or undefined.
//   return nextState || state;
// }

