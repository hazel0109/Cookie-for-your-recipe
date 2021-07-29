import React, { Component, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AddIngredientLists from './addIngredientList';
import AddRecipeLists from './addRecipeLists';
import { newRecipeTitleUpdate } from '../redux/action/actions';

const NewRecipePopup = (props) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newRecipeTitleUpdate(title));
  }, [title]);

  const onClickHandler = async () => {};
  return (
    <div className='popupBgd'>
      <div className='popup_container'>
        <div className='popup_btns'>
          <button className='popup_cancelBtn' onClick={props.cancelPopup}>
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
