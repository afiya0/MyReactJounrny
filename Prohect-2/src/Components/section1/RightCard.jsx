import React from "react";
import RightCardText from "./RightCardText";

const RightCard = () => {
  return (
    <div className="w-70 h-full rounded-3xl overflow-hidden px-3 relative">
      <img
        src="https://i.pinimg.com/736x/97/29/82/972982ec787befacdc9df0bef36eb708.jpg"
        alt="Carousel"
        className="w-full h-full object-cover rounded-3xl"
      />

      <RightCardText />
    </div>
  );
};

export default RightCard;
// text-[#FDFEBA]
// [#F94D01] ora
