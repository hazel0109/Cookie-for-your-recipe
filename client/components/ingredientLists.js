import React, { Component } from 'react';
import Ingredient from './ingredient';

const IngredientLists = () => {
  return (
    <ul className='ingredientLists'>
      <Ingredient />
      <Ingredient />
      <Ingredient />
      <Ingredient />
    </ul>
  );
};

export default IngredientLists;
