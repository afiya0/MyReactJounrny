import React from "react";
import CardImg from "./CardImg";

const CardParent = () => {
  const cards = [
    {
      id: 1,
      satisfaction: "Happy",
      description:
        "Our clients are delighted with the quality of service and consistent support we provide throughout every project.",
      image:
        "https://i.pinimg.com/736x/d4/30/74/d430747e0846394b5f152b0903fdeefa.jpg",
    },
    {
      id: 2,
      satisfaction: "Processing",
      description:
        "The project is currently in progress, with our team actively working to deliver the best possible results.",
      image:
        "https://i.pinimg.com/1200x/22/f0/3f/22f03f271fce896c380468d9179ce3ba.jpg",
    },
    {
      id: 3,
      satisfaction: "Completed",
      description:
        "This project has been successfully completed and delivered, meeting all requirements and expectations.",
      image: "https://i.pinimg.com/vwebp/1200x/1f/eb/d6/1febd6bfe8bd377d3508855149ba2e52.webp",
    },
    
  ];

  return (
    <div className="flex w-3/4 py-5 flex-nowrap">
      {cards.map((card) => (
        <CardImg
          key={card.id}
          id={card.id}
          satisfaction={card.satisfaction}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default CardParent;
