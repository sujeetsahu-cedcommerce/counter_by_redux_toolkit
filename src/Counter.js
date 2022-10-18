import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Style.css";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const selectHandler = (e) => {
    // alert(e.target.value);
    if (e.target.value === "add") {
      dispatch(incrementByAmount(Number(inputValue)));
    }
    if (e.target.value === "sub") {
      dispatch(decrementByAmount(Number(inputValue)));
    }
  };
  return (
    <div>
      <div className="upperContainer">
        <button onClick={() => dispatch(increment())}>+</button>
        <span
          style={{
            display: "inline-block",
            width: "10vw",
            height: "5vh",
            fontSize: "1.5rem",
          }}
        >
          {count}
        </span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <div className="lowerContainer">
        <input
          type="number"
          value={inputValue}
          placeholder="enter Amount"
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={() => dispatch(incrementByAmount(inputValue))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(decrementByAmount(Number(inputValue)))}>
          Subtract Amount
        </button>

        <select onChange={selectHandler}>
          <option selected disabled>Select Options</option>
          <option value="add">Add Amount</option>
          <option value="sub"> Subtract Amount</option>
        </select>
      </div>
    </div>
  );
};

export default Counter;
