import React, { useRef, useState } from "react";

const SearchInput = () => {
  const inputRef = useRef(null);
  const [text, setText] = useState("");
  const handleFocus = () => {
    inputRef.current.focus();
  };

  const showValue = () => {
    setText(inputRef.current.value);
  };
  const clearInput = () => {
    inputRef.current.value = "";
    setText("");
  };

  return (
    <div>
      <h1>Search Input</h1>

      <input ref={inputRef} type="text" />

      <button onClick={handleFocus}>Focus</button>
      <button onClick={clearInput}>Clear</button>
      <button onClick={showValue}>Show Value</button>
      <h2>{text}</h2>
    </div>
  );
};

export default SearchInput;
