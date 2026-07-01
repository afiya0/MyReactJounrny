import React, { useEffect, useState } from "react";
import './useEffectEg.css';
import Prev from "./previous";

const UseEffectEg = () => {
  const [name, setName] = useState("Ali");

  useEffect(() => {
  
   })
  
  return (
    <div className="container">
      <div className="card">
        <h1>useEffect Demo ✨</h1>

        <p className="subtitle">
          Whenever the name changes, <span>useEffect</span> runs.
        </p>

        <div className="name-box">
          <h2>{name}</h2>
        </div>

        <button onClick={() => setName("Sara")}>
          Change Name
        </button>
      </div>
    </div>
  );
};

export default UseEffectEg;