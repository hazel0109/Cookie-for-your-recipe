import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddIngredientLists from '../addIngredientList/addIngredientList';
import AddRecipeSteps from '../addRecipeSteps/addRecipeSteps';
import { PopupButton, PopupTextInput } from '../common';
import {
  newRecipeTitleUpdate,
  addNewRecipe,
  cleanPopupState,
} from '../../redux/action/popupRecipeActions';
import RecipeService from '../../services/recipesService/recipeService';
import { addRecipeFormSelector } from './addRecipeForm.selector';

const AddRecipeForm = ({ cancelPopup }) => {
  const [title, setTitle] = useState('');
  const [addErr, setAddErr] = useState(false);
  const [postErr, setPostErr] = useState(false);
  const dispatch = useDispatch();
  const { newRecipe } = useSelector(addRecipeFormSelector);

  useEffect(() => {
    let name = title;
    if (name) {
      name = name.charAt(0).toUpperCase() + name.substring(1);
    }
    dispatch(newRecipeTitleUpdate(name));
  }, [title]);

  const onClickHandler = async (e) => {
    e.preventDefault();
    if (
      !newRecipe.title ||
      !newRecipe.ingredients[0] ||
      !newRecipe.instructions[0]
    ) {
      setAddErr(true);
      return;
    }
    try {
      const results = await RecipeService.postRecipes(newRecipe);
      cancelPopup();
      setAddErr(true);
      dispatch(addNewRecipe(results));
      dispatch(cleanPopupState());
    } catch (err) {
      setPostErr(true);
    }
  };

  const onCancelClick = (e) => {
    e.preventDefault();
    cancelPopup();
    dispatch(cleanPopupState());
  };

  return (
    <div className='popupBgd'>
      <form className='popup_container'>
        <div className='popup_btns'>
          <PopupButton
            label={'Cancel'}
            type={'cancel'}
            handleClick={onCancelClick}
          />
          {addErr && (
            <div className='error_message'>
              please fill out recipe name, ingredients, and stpes
            </div>
          )}
          {postErr && (
            <div className='error_message'>Cannot add the new recipe now</div>
          )}
          <PopupButton
            label={'Add Recipe'}
            type={'add'}
            handleClick={onClickHandler}
          />
        </div>
        <div className='add_title'>
          <label className='title_label'>What is your recipe?</label>
          <PopupTextInput
            className='input_title'
            value={title}
            name={'title'}
            placeholder='Create your recipe name here!'
            handleChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='popup_main'>
          <AddIngredientLists />
          <AddRecipeSteps />
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
