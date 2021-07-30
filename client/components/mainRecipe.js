import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { newRecipeIngredientspdate } from '../redux/action/actions';
import Recipe from './recipe';
import { ingredientListsSelector } from './ingredientLists.selector';

const RecipeMaker = (instructions) => {
  return instructions.map((step, idx) => {
    return <Recipe key={idx} id={idx} index={idx + 1} step={step} />;
  });
};

const MainRecipe = () => {
  const { recipes, activeId } = useSelector(ingredientListsSelector);
  const recipe = recipes.find((recipe) => recipe._id === activeId);

  return (
    <ul className='mainRecipe'>
      {RecipeMaker(recipe ? recipe.instructions : [])}
    </ul>
  );
};

export default MainRecipe;
