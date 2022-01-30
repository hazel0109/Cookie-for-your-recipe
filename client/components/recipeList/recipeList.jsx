import React, { useState, useEffect, memo } from 'react';
import Recipe from '../recipe/recipe.jsx';
import AddRecipePopup from '../addRecipePopup/addRecipePopup.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { recipeListSelector } from './recipeList.selector';
import { updateActiveId } from '../../redux/action/actions';

const RecipeList = memo(({ toggleMenu, setToggleMenu }) => {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [activeButtonId, setActiveButtonId] = useState();
  const { recipes, activeId } = useSelector(recipeListSelector);

  useEffect(() => {
    if (toggleMenu) setToggleMenu(false);
    dispatch(updateActiveId(activeButtonId));
  }, [activeButtonId]);

  const ItemList = recipes.map((item) => {
    return (
      <Recipe
        key={item._id}
        id={item._id}
        onClick={setActiveButtonId}
        activeId={activeId}
        title={item.title}
      />
    );
  });

  return (
    <>
      <ul className={`itemList ${toggleMenu && 'menu_active'}`}>
        <button className='new_itemBtn' onClick={() => setClick(true)}>
          Add New Recipe
        </button>
        {ItemList}
      </ul>
      {click && <AddRecipePopup cancelPopup={() => setClick(false)} />}
    </>
  );
});

export default RecipeList;
