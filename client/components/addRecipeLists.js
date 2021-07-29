import React, { Component } from 'react';
import AddRecipe from './addRecipe';

// const box

// const ingList = [{ ing: 'banana', qt: 3, msmt: 'pcs' }];

// const ingredientMaker = () => {
//   // return ingList.map((ing, idx) => {
//   //   return <Ingredient {...ing} key={idx} id={idx} />;
//   // });
// };

const AddRecipeLists = () => {
  return (
    <ul className='add_recipeList'>
      <p className='accentFontColor'>Add steps for your recipe!</p>
      <AddRecipe />
      <AddRecipe />
      <AddRecipe />
    </ul>
  );
  //  <ul className='ingredientLists'>{ingredientMaker()}</ul>;
};

export default AddRecipeLists;
