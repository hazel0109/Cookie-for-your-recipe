import React, { Component, useState, useEffect } from 'react';
import Item from './item';
import NewRecipePopup from './newRecipePopup';
import { useDispatch, useSelector } from 'react-redux';
import { itemListSelector } from './itemList.selector';
import { updateActiveId } from '../redux/action/actions';

const ItemList = ({ toggleMenu }) => {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [activeButtonId, setActiveButtonId] = useState();
  const { recipes } = useSelector(itemListSelector);

  useEffect(() => {
    dispatch(updateActiveId(activeButtonId));
  }, [activeButtonId]);

  const ItemList = recipes.map((item, idx) => {
    return (
      <Item
        key={idx}
        id={item._id}
        onClick={setActiveButtonId}
        title={item.title}
      />
    );
  });

  return (
    <>
      <ul className={`itemList ${toggleMenu && 'menu_active'}`}>
        <button className='new_itemBtn' onClick={() => setClick(true)}>
          Add New Recipe
        </button>
        {ItemList}
      </ul>
      {click && <NewRecipePopup cancelPopup={() => setClick(false)} />}
    </>
  );
};

export default ItemList;
