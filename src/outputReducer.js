// outputReducer.js
import { SET_OUTPUT } from './actions';

const outputReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_OUTPUT:
      return action.value;
    default:
      return state;
  }
};

export default outputReducer;
