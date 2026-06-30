import React from "react";

const Image = ({ image }) => {
  return (
    <img
      src={image}
      alt="profile"
      width="200"
    />
  );
};

export default Image;