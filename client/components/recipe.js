import React, { Component } from 'react';

const Recipe = ({ index, step }) => {
  return (
    <li className='recipe'>
      <label className='recipe_process'>{index}</label>
      <div className='recipe_content'>{step}</div>
    </li>
  );
};

export default Recipe;
