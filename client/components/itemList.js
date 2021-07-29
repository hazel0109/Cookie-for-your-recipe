import React, { Component, useState } from 'react';
import Item from './item';
import NewRecipePopup from './newRecipePopup';
import { useSelector } from 'react-redux';
import { itemListSelector } from './itemList.selector';

const itemList = [
  'Banana Cupcake',
  'Banana Pudding',
  'Banana chip',
  'Banana soda',
];

const ItemMaker = (recipes) => {
  return recipes.map((item, idx) => {
    return <Item key={idx} id={idx} title={item.title} />;
  });
};

const ItemList = () => {
  //Declare new state variable, which we will call "click"
  const [click, setClick] = useState(false);
  const { recipes } = useSelector(itemListSelector);

  return (
    <>
      <ul className='itemList'>
        <button className='new_itemBtn' onClick={() => setClick(true)}>
          Add New Recipe
        </button>
        {ItemMaker(recipes)}
      </ul>
      {click && <NewRecipePopup cancelPopup={() => setClick(false)} />}
    </>
  );
};

export default ItemList;
