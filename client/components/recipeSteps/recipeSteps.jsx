import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import Steps from '../steps/steps.jsx';
import { ingredientListsSelector } from '../ingredientLists/ingredientLists.selector';

const RecipeSteps = memo(() => {
  const { recipes, activeId } = useSelector(ingredientListsSelector);
  const recipe = recipes.find((recipe) => recipe._id === activeId);

  const RecipeMaker =
    recipe &&
    recipe.instructions.map((step, i) => {
      return (
        <Steps
          key={step.id}
          id={step.id}
          index={i + 1}
          step={step.instruction}
        />
      );
    });

  return <ul className='recipe_steps'>{RecipeMaker}</ul>;
});

export default RecipeSteps;
