import React from 'react';
import { useSelector } from 'react-redux';
import Ingredient from './ingredient';
import { ingredientListsSelector } from './ingredientLists.selector';

const IngredientLists = () => {
  const { recipes, activeId } = useSelector(ingredientListsSelector);
  const recipe = recipes.find((recipe) => recipe._id === activeId);

  const IngredientMaker =
    recipe &&
    recipe.ingredients.map((ing, idx) => {
      return <Ingredient {...ing} key={idx} id={idx} />;
    });

  return <ul className='ingredientLists'>{IngredientMaker}</ul>;
};

export default IngredientLists;
