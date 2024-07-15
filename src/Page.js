import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInput1, setInput2, setOperation, setOutput } from "./actions";

const Page = () => {
  const dispatch = useDispatch();
  const input1 = useSelector((state) => state.input1);
  const input2 = useSelector((state) => state.input2);
  const operation = useSelector((state) => state.operation);
  const output = useSelector((state) => state.output);

  const handleNumberClick = (value) => {
    if (!operation) {
      // Concatenate digits for input1
      const newInput1 = input1 === 0 ? value.toString() : input1.toString() + value.toString();
      dispatch(setInput1(parseFloat(newInput1)));
    } else {
      // Concatenate digits for input2
      const newInput2 = input2 === 0 ? value.toString() : input2.toString() + value.toString();
      dispatch(setInput2(parseFloat(newInput2)));
    }
  };

  const handleOperation = (e) => {
    const op = e.target.value;
    dispatch(setOperation(op));
  };

  const handleDelete = () => {
    dispatch(setInput1(0));
    dispatch(setInput2(0));
    dispatch(setOperation(''));
    dispatch(setOutput(0));
  };

  const handleSubmit = () => {
    let result;
    switch (operation) {
      case '+':
        result = input1 + input2;
        break;
      case '-':
        result = input1 - input2;
        break;
      case '*':
        result = input1 * input2;
        break;
      case '/':
        result = input1 / input2;
        break;
      default:
        result = 0;
        break;
    }
    dispatch(setOutput(result));
  };

  return (
    <div className="container mt-5 py-5">
      <div className="d-flex">
        <input
          type="number"
          value={input1}
          placeholder="Enter Input1"
          readOnly
        />
        <select onChange={handleOperation}>
          <option value="">Select Operation</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          value={input2}
          placeholder="Enter Input2"
          readOnly
        />
        <label className="ms-5">Output: {output}</label>
      </div>

      <button type="button" onClick={handleSubmit} className="btn ms-5">
        Submit
      </button>
      <button type="button" onClick={handleDelete} className="btn ms-3">
        Clear
      </button>
      <div className="d-flex gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((value, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleNumberClick(value)}
            className="btn back"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page;
