import React, { useReducer } from "react";

function counterfnc(counter, action) {
  switch (action.type) {
    case "inc":
      return counter + 1;
    case "dec":
      return counter - 1;
    case "reset":
      return 0;

    default:
      return counter;
  }
}

const CounterRed = () => {
  const [counter, dispatch] = useReducer(counterfnc, 0);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterRed;
