const initialState = {
  count: 0
}

function count (state = initialState, action ) {
  switch(action.type){
    case 'ADD_COUNT': 
      console.log('inside count reducer: ', state);
      return [
        ...state, {
          count: state.count.count + 1
        }
      ];
    default: 
      console.log('inside count reducer, default: ', state);
      return {...state}
  }
}

export default count