import { NavigationActions } from 'react-navigation';

const initialState = {
  item: null
}

function item(state = initialState, action) {
  switch (action.type) {
    case 'SEND_DETAILS':
      console.log('send details reducer hit!')
      return {
        ...state,
        item: action.item
      };
      break;
    default:
      return state;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
}

