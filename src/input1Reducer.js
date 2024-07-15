// input1Reducer.js
import { SET_INPUT1 } from './actions';

const input1Reducer = (state = 0, action) => {
  switch (action.type) {
    case SET_INPUT1:
      return action.value;
    default:
      return state;
  }
};

export default input1Reducer;
