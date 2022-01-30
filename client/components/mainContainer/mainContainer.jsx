import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import RecipeList from '../recipeList/recipeList.jsx';
import IngredientLists from '../ingredientLists/ingredientLists.jsx';
import RecipeSteps from '../recipeSteps/recipeSteps.jsx';
import Header from '../header/header.jsx';
import RecipeService from '../../services/recipesService/recipeService';
import { populateRecipes } from '../../redux/action/actions';

const MainContainer = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const result = await RecipeService.getRecipes();
      dispatch(populateRecipes(result));
    } catch (err) {
      setErr(err);
    }
  }, []);

  const onMenuToggle = useCallback(() => {
    setToggleMenu((toggleMenu) => !toggleMenu);
  }, [toggleMenu]);

  return (
    <div className='recipebook'>
      <Header onMenuToggle={onMenuToggle} />
      {err && <div className='error'>Cannot load the recipes now</div>}
      <div className='recipe_contents'>
        <div className='recipe_types'>
          <RecipeList toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          {!toggleMenu && <IngredientLists />}
        </div>
        <div className='recipe_directions'>
          {!toggleMenu && <RecipeSteps />}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
