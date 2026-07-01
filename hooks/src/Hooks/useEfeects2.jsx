import React, { useEffect, useState } from "react";
import "./useEffectEg.css";

const UseEffectEg = () => {
  const [name, setName] = useState("Ali");

  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  const changeName = () => {
    setName((prev) => (prev === "Ali" ? "Sara" : "Ali"));
  };

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

        <button onClick={changeName}>
          Change Name
        </button>
      </div>
    </div>
  );
};

export default UseEffectEg;