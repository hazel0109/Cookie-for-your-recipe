import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import Ingredient from '../ingredient/ingredient.jsx';
import { ingredientListsSelector } from './ingredientLists.selector';

const IngredientLists = memo(() => {
  const { recipes, activeId } = useSelector(ingredientListsSelector);
  const recipe = recipes.find((recipe) => recipe._id === activeId);

  const IngredientMaker =
    recipe &&
    recipe.ingredients.map((ing, idx) => {
      return <Ingredient {...ing} key={idx} id={idx} />;
    });

  return (
    <div className='ingredientLists'>
      <h1 className='active_title'>{recipe && recipe.title}</h1>
      <div className='ingredient_container'>
        <button className='recipe_edit_btn'>Edit</button>
        <ul className='ingredient_rows'>{IngredientMaker}</ul>
      </div>
    </div>
  );
});

export default IngredientLists;
