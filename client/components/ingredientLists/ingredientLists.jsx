import React, { useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Ingredient from '../ingredient/ingredient';
import EditRecipePopup from '../editRecipePopup/editRecipePopup';
import { addRecipeForEdit } from '../../redux/action/editRecipeActions';
import { ingredientListsSelector } from './ingredientLists.selector';

const IngredientLists = memo(() => {
  const [onEdit, setOnEdit] = useState(false);
  const dispatch = useDispatch();
  const { recipes, activeId } = useSelector(ingredientListsSelector);
  const recipe = recipes.find((recipe) => recipe._id === activeId);

  const IngredientMaker =
    recipe &&
    recipe.ingredients.map((ing, idx) => {
      return <Ingredient {...ing} key={idx} id={idx} />;
    });

  const onEditPopup = () => {
    dispatch(addRecipeForEdit(recipe));
    setOnEdit(true);
  };

  return (
    <>
      <div className='ingredientLists'>
        <h1 className='active_title'>{recipe && recipe.title}</h1>
        <div className='ingredient_container'>
          <button className='recipe_edit_btn' onClick={onEditPopup}>
            Edit
          </button>
          <ul className='ingredient_rows'>{IngredientMaker}</ul>
        </div>
      </div>
      {onEdit && <EditRecipePopup cancelEdit={() => setOnEdit(false)} />}
    </>
  );
});

export default IngredientLists;
