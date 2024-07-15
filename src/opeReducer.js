// operationReducer.js
import { SET_OPERATION } from './actions';

const operationReducer = (state = '', action) => {
  switch (action.type) {
    case SET_OPERATION:
      return action.operation;
    default:
      return state;
  }
};

export default operationReducer;
