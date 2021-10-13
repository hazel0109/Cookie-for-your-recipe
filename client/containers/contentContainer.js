import React, { Component } from 'react';
import IngredientLists from '../components/ingredientLists';
import MainRecipe from '../components/mainRecipe';

const ContentContainer = () => {
  return (
    <div className='main_item'>
      <IngredientLists />
      <MainRecipe />
    </div>
  );
};

export default ContentContainer;
