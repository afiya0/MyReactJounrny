import React, { useState } from "react";

const Prev = () => {
  const [product, setProduct] = useState("Laptop");
  const change = () => {
    setProduct((prevPro) => 
       prevPro === "Laptop" ? "Mobile" : "Laptop"
    );
  };
  return (
    <div>
      <h1>{product}</h1>
      <button onClick={change}>click</button>
    </div>
  );
}
export default Prev;
