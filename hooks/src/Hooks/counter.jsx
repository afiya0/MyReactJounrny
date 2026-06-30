import React, { useState } from "react";
import bulbOff from "../assets/off.jpeg";
import bulbOn from "../assets/on.jpeg";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false); //Mujhe ek state chahiye jiska naam isOn hai aur shuru mein uski value false hai."

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Counting </button>

      <div>
        <img src={isOn ? bulbOn : bulbOff} alt="" />

        <button onClick={() => setIsOn(!isOn)}>switch</button>
      </div>
    </div>
  );
};

export default Counter;
