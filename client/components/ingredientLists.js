import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import Ingredient from './ingredient';
import { ingredientListsSelector } from './ingredientLists.selector';

const IngredientMaker = (ingredients) => {
  return ingredients.map((ing, idx) => {
    return <Ingredient {...ing} key={idx} id={idx} />;
  });
};

const IngredientLists = () => {
  const { recipes, activeId } = useSelector(ingredientListsSelector);
  const recipe = recipes.find((recipe) => recipe._id === activeId);
  return (
    <ul className='ingredientLists'>
      {IngredientMaker(recipe ? recipe.ingredients : [])}
    </ul>
  );
};

export default IngredientLists;
