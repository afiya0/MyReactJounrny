import React, { useEffect, useState } from "react";

const UseStateColor = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    document.body.style.backgroundColor = color;
    document.body.style.color="white";
  }, [color]);
  // const ChangeColor=()=>{
  //     document.body.style.background="blue"
  // }
  return (
    <div>
      <h1>{color}</h1>
      {/* <button onClick={ChangeColor}>Change Color </button> */}
      <button onClick={()=>setColor("blue")}>change color </button>
    </div>
  );
};

export default UseStateColor;
