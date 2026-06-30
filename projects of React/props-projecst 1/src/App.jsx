import { useState } from "react";

import "./index.css";
import Card from "./Components/Card";

const App = () => {
  const reciepies = [
    {
      badge: "Salty",
      img: "https://i.pinimg.com/736x/15/e4/da/15e4daaa12c438ecd87bd39a10d6983e.jpg",
      Rname: "Japanese Chicken Omelette",
      rDec: "A perfect mix of salty cravings and spicy kicks in every bite. 🔥🧂 One taste and you won’t stop until the plate is empty! 😋",
      rTime: 10,
      rServe: 5,
      rLevel: "Easy",
    },
    {
      badge: "Spicy",
      img: "https://i.pinimg.com/736x/4a/01/7f/4a017f9efa7395769a20c2f2ae36b7a6.jpg",
      Rname: "Chilli Garlic Noodles",
      rDec: "Fiery noodles tossed with garlic and chilli sauce. Every bite hits different! 🔥🍜",
      rTime: 15,
      rServe: 2,
      rLevel: "Easy",
    },
    {
      badge: "Sweet",
      img: "https://i.pinimg.com/736x/36/7e/cc/367eccf2c580f6779e904074eb0fbf35.jpg",
      Rname: "Chocolate Lava Cake",
      rDec: "Warm, gooey chocolate exploding from inside. Pure dessert heaven! 🍫✨",
      rTime: 25,
      rServe: 2,
      rLevel: "Medium",
    },
    {
      badge: "Salty",
      img: "https://i.pinimg.com/736x/66/31/56/6631567b09bd9f177f08537f5a0e9cce.jpg",
      Rname: "Crispy Fries",
      rDec: "Golden crispy fries with perfect salt balance. Simple but addictive! 🍟",
      rTime: 20,
      rServe: 3,
      rLevel: "Easy",
    },
    {
      badge: "Spicy",
      img: "https://i.pinimg.com/736x/2b/84/f0/2b84f09a4b454176d0b0b369aacd9c52.jpg",
      Rname: "Spicy Chicken Wings",
      rDec: "Hot, crispy wings coated in bold spicy sauce. Perfect for spice lovers! 🔥",
      rTime: 30,
      rServe: 4,
      rLevel: "Medium",
    },
    {
      badge: "Sweet",
      img: "https://i.pinimg.com/736x/1d/82/23/1d8223899457b8782abfbc768e2baa3f.jpg",
      Rname: "Strawberry Waffles",
      rDec: "Soft waffles topped with fresh strawberries and cream. 🍓🧇",
      rTime: 18,
      rServe: 2,
      rLevel: "Easy",
    },
    {
      badge: "Salty",
      img: "https://i.pinimg.com/736x/f6/15/9c/f6159cc52b6c2c279ffd6d41bcb7f1bf.jpg",
      Rname: "Cheesy Sandwich",
      rDec: "Melted cheese, toasted bread, and perfect crunch in every bite. 🧀🥪",
      rTime: 12,
      rServe: 1,
      rLevel: "Easy",
    },
    {
      badge: "Spicy",
      img: "https://i.pinimg.com/1200x/5a/a2/f9/5aa2f92b12426ede790bbfb7bdafcd28.jpg",
      Rname: "Spicy Biryani",
      rDec: "Aromatic rice layered with spicy masala and tender chicken. 🍛🔥",
      rTime: 60,
      rServe: 6,
      rLevel: "Hard",
    },
  ];
  return (
    <div className="container">
      {reciepies.map((item, index) => (
        <Card
          key={index}
          badge={item.badge}
          img={item.img}
          Rname={item.Rname}
          rDec={item.rDec}
          rTime={item.rTime}
          rServe={item.rServe}
          rLevel={item.rLevel}
        />
      ))}
    </div>
  );
};

export default App;
