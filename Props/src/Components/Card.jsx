import React from "react";
import hero from "../assets/hero.png";

const Card = ({img,name,role}) => {
  return (
    <>
      <div className="card">
        <div className="profile-pic">
          <img src={img} alt="" />
        </div>
        <h1 className="name">{name}</h1>
        <p>{role}</p>
        <button>Follow</button>
      </div>
    </>
  );
};

export default Card;
