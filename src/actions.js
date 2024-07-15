// actions.js
export const SET_INPUT1 = 'SET_INPUT1';
export const SET_INPUT2 = 'SET_INPUT2';
export const SET_OPERATION = 'SET_OPERATION';
export const SET_OUTPUT = 'SET_OUTPUT';

export const setInput1 = (value) => ({
  type: SET_INPUT1,
  value,
});

export const setInput2 = (value) => ({
  type: SET_INPUT2,
  value,
});

export const setOperation = (operation) => ({
  type: SET_OPERATION,
  operation,
});

export const setOutput = (value) => ({
  type: SET_OUTPUT,
  value,
});
