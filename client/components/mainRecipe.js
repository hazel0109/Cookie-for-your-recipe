import React from 'react';
import { useSelector } from 'react-redux';
import { newRecipeIngredientspdate } from '../redux/action/actions';
import Recipe from './recipe';
import { ingredientListsSelector } from './ingredientLists.selector';

const MainRecipe = () => {
  const { recipes, activeId } = useSelector(ingredientListsSelector);
  const recipe = recipes.find((recipe) => recipe._id === activeId);

  const RecipeMaker =
    recipe &&
    recipe.instructions.map((step) => {
      return (
        <Recipe
          key={step.id}
          id={step.id}
          index={step.id}
          step={step.instruction}
        />
      );
    });

  return <ul className='mainRecipe'>{RecipeMaker}</ul>;
};

export default MainRecipe;
