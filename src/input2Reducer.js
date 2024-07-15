// input2Reducer.js
import { SET_INPUT2 } from './actions';

const input2Reducer = (state = 0, action) => {
  switch (action.type) {
    case SET_INPUT2:
      return action.value;
    default:
      return state;
  }
};

export default input2Reducer;
