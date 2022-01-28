import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddIngredientLists from './addIngredientList';
import AddRecipeLists from './addRecipeLists';
import {
  newRecipeTitleUpdate,
  addNewRecipe,
  cleanPopupState,
} from '../redux/action/actions';
import RecipeService from '../services/recipesService/recipeService';
import { newRecipePopupSelector } from './newRecipePopup.selector';

const NewRecipePopup = (props) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const { newRecipe } = useSelector(newRecipePopupSelector);

  useEffect(() => {
    dispatch(newRecipeTitleUpdate(title));
  }, [title]);

  // useEffect(async () => {
  //   const result = await RecipeService.getRecipes(
  //     'http://localhost:3000/recipes'
  //   );
  //   console.log(result);
  //   dispatch(populateRecipes(result));
  // }, []);

  //use async when I need to call to badkend
  const onClickHandler = async () => {
    //need to do props.cancelPopup
    //need to make axios call?
    const results = await RecipeService.postRecipes(
      'http://localhost:3000/recipes',
      newRecipe
    );
    props.cancelPopup();
    dispatch(addNewRecipe(results));
    dispatch(cleanPopupState());
    //need to add functionally error handler that it cannot add to the list without filled in
  };

  const onCancelClick = () => {
    props.cancelPopup();
    dispatch(cleanPopupState());
  };

  return (
    <div className='popupBgd'>
      <div className='popup_container'>
        <div className='popup_btns'>
          <button className='popup_cancelBtn' onClick={onCancelClick}>
            Cancel
          </button>
          <button className='popup_addBtn' onClick={onClickHandler}>
            Add Recipe
          </button>
        </div>
        <div className='add_title'>
          <label className='title_label'>What is your recipe?</label>
          <input
            type='text'
            className='input_title'
            placeholder='Create your recipe name here!'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
        </div>
        <div className='popup_main'>
          <div className='popup_sidebar'></div>
          <AddIngredientLists />
          <AddRecipeLists />
          <div className='popup_sidebar'></div>
        </div>
      </div>
    </div>
  );
};

export default NewRecipePopup;
