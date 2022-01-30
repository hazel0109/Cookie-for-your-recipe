import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddIngredientLists from '../addIngredientList/addIngredientList.jsx';
import AddRecipeSteps from '../addRecipeSteps/addRecipeSteps.jsx';
import {
  newRecipeTitleUpdate,
  addNewRecipe,
  cleanPopupState,
} from '../../redux/action/actions';
import RecipeService from '../../services/recipesService/recipeService';
import { addRecipePopupSelector } from './addRecipePopup.selector';

const AddRecipePopup = ({ cancelPopup }) => {
  const [title, setTitle] = useState('');
  const [addErr, setAddErr] = useState(false);
  const [postErr, setPostErr] = useState(false);
  const dispatch = useDispatch();
  const { newRecipe } = useSelector(addRecipePopupSelector);

  useEffect(() => {
    dispatch(newRecipeTitleUpdate(title));
  }, [title]);

  const onClickHandler = async () => {
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

  const onCancelClick = () => {
    cancelPopup();
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
          {addErr && (
            <div className='error_message'>
              please fill out recipe name, ingredients, and stpes
            </div>
          )}
          {postErr && (
            <div className='error_message'>Cannot add the new recipe now</div>
          )}
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
          <AddRecipeSteps />
        </div>
      </div>
    </div>
  );
};

export default AddRecipePopup;
