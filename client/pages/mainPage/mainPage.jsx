import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import RecipeList from '../../components/recipeList/recipeList';
import IngredientLists from '../../components/ingredientLists/ingredientLists';
import RecipeSteps from '../../components/recipeSteps/recipeSteps';
import Header from '../../components/header/header';
import RecipeService from '../../services/recipesService/recipeService';
import { populateRecipes } from '../../redux/action/recipesActions';

const MainPage = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await RecipeService.getRecipes();
        dispatch(populateRecipes(result));
        setErr(false);
      } catch (err) {
        setErr(err);
      }
    };
    getData();
  }, []);

  const onMenuToggle = useCallback(() => {
    setToggleMenu((toggleMenu) => !toggleMenu);
  }, [toggleMenu]);

  return (
    <div className='recipebook'>
      <Header onMenuToggle={onMenuToggle} />
      <div className='recipe_contents'>
        {err && <div className='error'>Please add your recipes</div>}
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

export default MainPage;
