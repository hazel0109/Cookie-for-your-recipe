import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import Ingredient from './ingredient';
import { ingredientListsSelector } from './ingredientLists.selector';

const ingList = [
  { ing: 'banana', qt: 3, msmt: 'pcs' },
  { ing: 'peach', qt: 5, msmt: 'pcs' },
  { ing: 'icecream', qt: 6, msmt: 'spoons' },
  { ing: 'soysauce', qt: 2, msmt: 'spoons' },
  { ing: 'milk', qt: 1000, msmt: 'ml' },
];

const ingredientMaker = (ingredients) => {
  return ingredients.map((ing, idx) => {
    return <Ingredient {...ing} key={idx} id={idx} />;
  });
};

const IngredientLists = () => {
  const { recipes, activeId } = useSelector(ingredientListsSelector);
  const recipe = recipes.find((recipe) => recipe._id === activeId);
  return (
    <ul className='ingredientLists'>
      {ingredientMaker(recipe ? recipe.ingredients : [])}
    </ul>
  );
};

export default IngredientLists;
