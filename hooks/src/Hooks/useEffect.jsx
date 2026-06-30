// import React from "react";
import React, { useState, useEffect } from "react";
const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("counter is update ", count);
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Counting </button>
    </div>
  );
};

export default UseEffect;
