import React, { Component } from 'react';

const Ingredient = ({ ingredient, quantity, measurement }) => {
  return (
    <li className='ingredient'>
      <p className='ingredient_name'> {ingredient} </p>
      <p className='ingredient_quantity'>{`: ${quantity} ${measurement}`}</p>
    </li>
  );
};

export default Ingredient;
