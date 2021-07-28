import React, { Component } from 'react';
import Item from './item';

const ItemList = () => {
  return (
    <ul className='itemList'>
      <button className='new_itemBtn'>Add New Recipe</button>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </ul>
  );
};

export default ItemList;
