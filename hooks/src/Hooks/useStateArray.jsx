import { useState } from "react";
import "./UseArray.css";

const fruits = [
  "🍌 Banana",
  "🍎 Apple",
  "🥭 Mango",
  "🍊 Orange",
  "🍇 Grapes",
  "🍍 Pineapple",
  "🍉 Watermelon",
  "🧡 Papaya",
  "🍓 Strawberry",
  "🫐 Blueberry",
  "🍒 Cherry",
  "🥝 Kiwi",
  "🍑 Peach",
  "🍐 Pear",
  "🥭 Guava",
  "❤️ Pomegranate",
  "🥥 Lychee",
  "🥥 Coconut",
  "🐉 Dragon Fruit",
  "🥑 Avocado",
];

function UseArray() {
  const [fruitList, setFruits] = useState([]);

  function addFruit() {
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

    setFruits((item) => [...item, randomFruit]);
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Fruit Collection 🍓</h1>
        <p>Click the button to add a random fruit.</p>

        <button onClick={addFruit}>+ Add Fruit</button>

        <div className="fruit-grid">
          {fruitList.map((fruit, index) => (
            <div className="fruit-card" key={index}>
              {fruit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UseArray;