import React from "react";
import Hero from "./heroText";
import Arrow from "./arrow";

const LeftText = () => {
  return (
    <div className="flex flex-col w-1/3 h-full px-10 py-10">
      <Hero />
      <Arrow />
    </div>
  );
};

export default LeftText;
