import React, { useState, useEffect, memo } from 'react';
import { RecipeButton } from '../common';
import AddRecipePopup from '../addRecipePopup/addRecipePopup';
import { useDispatch, useSelector } from 'react-redux';
import { recipeListSelector } from './recipeList.selector';
import { updateActiveId } from '../../redux/action/recipesActions';

const RecipeList = memo(({ toggleMenu, setToggleMenu }) => {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [activeButtonId, setActiveButtonId] = useState();
  const { recipes, activeId } = useSelector(recipeListSelector);

  useEffect(() => {
    if (toggleMenu) setToggleMenu(false);
    dispatch(updateActiveId(activeButtonId));
  }, [activeButtonId]);

  const recipeList = recipes.map((item) => {
    return (
      <RecipeButton
        key={item._id}
        id={item._id}
        handleClick={setActiveButtonId}
        activeId={activeId}
        label={item.title}
      />
    );
  });

  return (
    <>
      <ul className={`recipeList ${toggleMenu && 'menu_active'}`}>
        <button className='new_recipeBtn' onClick={() => setClick(true)}>
          Add New Recipe
        </button>
        {recipeList}
      </ul>
      {click && <AddRecipePopup cancelPopup={() => setClick(false)} />}
    </>
  );
});

export default RecipeList;
