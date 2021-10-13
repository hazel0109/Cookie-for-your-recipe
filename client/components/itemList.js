import React, { Component, useState, useEffect } from 'react';
import Item from './item';
import NewRecipePopup from './newRecipePopup';
import { useDispatch, useSelector } from 'react-redux';
import { itemListSelector } from './itemList.selector';
import { updateActiveId } from '../redux/action/actions';

const ItemMaker = (recipes, setActiveButtonId) => {
  return recipes.map((item, idx) => {
    return (
      <Item
        key={idx}
        id={item._id}
        onClick={setActiveButtonId}
        title={item.title}
      />
    );
  });
};

const ItemList = () => {
  //Declare new state variable, which we will call "click"
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [activeButtonId, setActiveButtonId] = useState();
  const { recipes } = useSelector(itemListSelector);

  useEffect(() => {
    dispatch(updateActiveId(activeButtonId));
  }, [activeButtonId]);

  return (
    <>
      <ul className='itemList'>
        <button className='new_itemBtn' onClick={() => setClick(true)}>
          Add New Recipe
        </button>
        {ItemMaker(recipes, setActiveButtonId)}
      </ul>
      {click && <NewRecipePopup cancelPopup={() => setClick(false)} />}
    </>
  );
};

export default ItemList;
