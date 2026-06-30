import React, {useState } from "react";

const SateUseObject = () => {
  const [reciepie, setRecipie] = useState({
    name: "biryani",
    ingred: "GaramMaslah",
    taste: "Spicy",
  });
  function changeReciepie(){
    setRecipie({...reciepie,
      name:"Qourma",
      taste:"Salty"
    })
  }
  return <div>
    <h1>Name:{reciepie.name}</h1>
    <h1>ingredients: {reciepie.ingred}</h1>
    <h1>Taste: {reciepie.taste}</h1>
    <button onClick={changeReciepie}>set the Recipeies</button>
  </div>;
};

export default SateUseObject;
