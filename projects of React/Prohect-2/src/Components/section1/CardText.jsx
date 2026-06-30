import React from "react";

const CardText = ({ id, satisfaction, description }) => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-between p-2 text-white">
      <h2 className="mx-3 text-4xl bg-[#FDFEBA] w-15 h-15 rounded-full font-bold px-8 flex justify-center items-center text-[#F94D01]">
        {id}
      </h2>

      <div>
        <p className="text-1xl p-5 leading-tight text-amber-50">
          {description}
        </p>

        <div className="flex items-center justify-evenly font-bold">
          <button className="bg-[#F94D01] text-[#FDFEBA] mx-5 px-10 py-2 rounded-full uppercase">
            {satisfaction}
          </button>

          <button className="bg-[#F94D01] mr-12 px-2 py-2 rounded-full uppercase">
            <i className="fa-solid fa-arrow-right text-[#FDFEBA] text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardText;
