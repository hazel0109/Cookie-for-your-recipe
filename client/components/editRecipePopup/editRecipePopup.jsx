import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditIngredientList from '../editIngredientList/editIngredientList';
import EditRecipeSteps from '../editRecipeSteps/editRecipeSteps';
import { EditButton, PopupTextInput } from '../common';
import {
  editTitleUpdate,
  cleanEditState,
} from '../../redux/action/editRecipeActions';
import { deleteRecipe, updateRecipe } from '../../redux/action/recipesActions';
import { EditRecipePopupSelector } from './editRecipePopup.selector';
import RecipeService from '../../services/recipesService/recipeService';

const EditRecipePopup = ({ cancelEdit }) => {
  const [addErr, setAddErr] = useState(false);
  const [postErr, setPostErr] = useState(false);
  const dispatch = useDispatch();
  const { initRecipe } = useSelector(EditRecipePopupSelector);

  const onSaveClick = async () => {
    if (
      !initRecipe.title ||
      !initRecipe.ingredients[0] ||
      !initRecipe.instructions[0]
    ) {
      setAddErr(true);
      return;
    }
    try {
      await RecipeService.updateRecipes(initRecipe);
      cancelEdit();
      dispatch(updateRecipe(initRecipe));
      dispatch(cleanEditState());
    } catch (err) {
      setPostErr(true);
    }
  };

  const onCancelClick = () => {
    cancelEdit();
    dispatch(cleanEditState());
  };

  const onDeleteClick = async () => {
    try {
      await RecipeService.deleteRecipes(initRecipe._id);
      cancelEdit();
      dispatch(cleanEditState());
      dispatch(deleteRecipe(initRecipe._id));
    } catch (err) {
      setPostErr(true);
    }
  };

  return (
    <div className='popupBgd'>
      <div className='popup_container'>
        <div className='edit_btns'>
          <EditButton
            label={'Delete'}
            type={'delete'}
            handleClick={onDeleteClick}
          />
          {addErr && (
            <div className='error_message'>
              please fill out recipe name, ingredients, and stpes
            </div>
          )}
          {postErr && (
            <div className='error_message'>Cannot edit the recipe now</div>
          )}
          <div className='rightside_btns'>
            <EditButton
              label={'Cancel'}
              type={'cancel'}
              handleClick={onCancelClick}
            />
            <EditButton
              label={'Save'}
              type={'save'}
              handleClick={onSaveClick}
            />
          </div>
        </div>
        <div className='add_title'>
          <label className='title_label'>What is your recipe?</label>
          <PopupTextInput
            className='input_title'
            value={initRecipe.title}
            name={'title'}
            placeholder='Create your recipe name here!'
            handleChange={(e) => dispatch(editTitleUpdate(e.target.value))}
          />
        </div>
        <div className='popup_main'>
          <EditIngredientList />
          <EditRecipeSteps />
        </div>
      </div>
    </div>
  );
};

export default EditRecipePopup;
