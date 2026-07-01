import React, { useState } from "react";
import "./StateUseObject.css";

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

  function removeRecipe(id) {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== id)
    );
  }

  return (
    <div className="container">
      <h1 className="heading">🍽 Recipe Collection</h1>
      <p className="subHeading">
        Manage your recipes using React useState
      </p>

      <button className="addBtn" onClick={addRecipe}>
        + Add Random Recipe
      </button>

      {recipes.length === 0 ? (
        <p className="empty">No recipes available 🍴</p>
      ) : (
        <div className="recipeGrid">
          {recipes.map((recipe) => (
            <div className="card" key={recipe.id}>
              <span className="recipeId">
                Recipe #{recipe.id}
              </span>

              <h2 className="recipeName">{recipe.name}</h2>

              <p className="info">
                Ingredient: <span>{recipe.ingred}</span>
              </p>

              <p className="info">
                Taste: <span>{recipe.taste}</span>
              </p>

              <button
                className="deleteBtn"
                onClick={() => removeRecipe(recipe.id)}
              >
                Delete Recipe
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StateUseObject;