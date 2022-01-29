import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ItemList from '../components/itemList';
import IngredientLists from '../components/ingredientLists';
import MainRecipe from '../components/mainRecipe';
import Header from '../components/header';
import RecipeService from '../services/recipesService/recipeService';
import { populateRecipes } from '../redux/action/actions';

const MainContainer = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(async () => {
    const result = await RecipeService.getRecipes();
    dispatch(populateRecipes(result));
  }, []);

  const onMenuToggle = () => {
    setToggleMenu((toggleMenu) => !toggleMenu);
  };
  return (
    <div className='recipebook'>
      <Header onMenuToggle={onMenuToggle} />
      <div className='recipe_contents'>
        <div className='recipe_types'>
          <ItemList toggleMenu={toggleMenu} />
          {!toggleMenu && <IngredientLists />}
        </div>
        <div className='recipe_steps'>{!toggleMenu && <MainRecipe />}</div>
      </div>
    </div>
  );
};

export default MainContainer;
