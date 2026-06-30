import React, { useState } from "react";

const recipesList = [
  {
    name: "Qorma",
    ingred: "Chicken",
    taste: "Salty",
  },
  {
    name: "Pizza",
    ingred: "Cheese",
    taste: "Cheesy",
  },
  {
    name: "Burger",
    ingred: "Beef",
    taste: "Smoky",
  },
  {
    name: "Pasta",
    ingred: "Cream",
    taste: "Creamy",
  },
];

const StateUseObject = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Biryani",
      ingred: "Garam Masala",
      taste: "Spicy",
    },
  ]);

  function addRecipe() {
    const randomRecipe =
      recipesList[Math.floor(Math.random() * recipesList.length)];

    setRecipes((prevRecipes) => [
      ...prevRecipes,
      {
        id: prevRecipes.length + 1,
        ...randomRecipe,
      },
    ]);
  }
function removeRecipie(id) {
  setRecipes((prevRecipes) =>
    prevRecipes.filter((recipe) => recipe.id !== id)
  );
}
  return (
    <div>
      <button onClick={addRecipe}>Add Recipe</button>

      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h2>Recipe ID: {recipe.id}</h2>
          <h3>Name: {recipe.name}</h3>
          <h3>Ingredient: {recipe.ingred}</h3>
          <h3>Taste: {recipe.taste}</h3>
          <button onClick={()=>removeRecipie(recipe.id)}>delete reciepe</button>
        </div>
      ))}
    </div>
  );
};

export default StateUseObject;
