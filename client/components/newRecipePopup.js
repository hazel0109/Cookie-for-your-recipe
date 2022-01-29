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

  const onClickHandler = async () => {
    const results = await RecipeService.postRecipes(newRecipe);
    props.cancelPopup();
    dispatch(addNewRecipe(results));
    dispatch(cleanPopupState());
  };

  const onCancelClick = () => {
    props.cancelPopup();
    dispatch(cleanPopupState());
  };

  return (
    <div className='popupBgd'>
      <div className='popup_container'>
        <div className='popup_btns'>
          <button
            className='popup_btn_fontsize popup_cancelBtn'
            onClick={onCancelClick}
          >
            Cancel
          </button>
          <button
            className='popup_btn_fontsize popup_addBtn'
            onClick={onClickHandler}
          >
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
          <AddIngredientLists />
          <AddRecipeLists />
        </div>
      </div>
    </div>
  );
};

export default NewRecipePopup;
