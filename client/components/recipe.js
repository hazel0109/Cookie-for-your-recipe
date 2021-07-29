import React, { Component } from 'react';

const Recipe = ({ index, recipe }) => {
  return (
    <li className='recipe'>
      <label className='recipe_process'>{index}</label>
      <div className='recipe_content'>{recipe}</div>
    </li>
  );
};

export default Recipe;
