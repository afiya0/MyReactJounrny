import React from "react";
import CardText from "./CardText";

const CardImg = ({ id, satisfaction, description, image }) => {
  return (
    <div className="w-70 h-full rounded-3xl overflow-hidden px-3 relative">
      <img
        src={image}
        alt="Carousel"
        className="w-full h-full object-cover rounded-3xl"
      />

      <CardText
        id={id}
        satisfaction={satisfaction}
        description={description}
      />
    </div>
  );
};

export default CardImg;