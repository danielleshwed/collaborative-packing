import { FETCH_SUCCESS } from './actions';

const initialState = {
  items: []
}

function itemsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        items: action.items
      })
    default:
      return state;
  }
}

export default itemsReducer;
