import React, { useRef } from "react";

const UseRefEg = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.value="";
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter name"
      />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
};

export default UseRefEg;