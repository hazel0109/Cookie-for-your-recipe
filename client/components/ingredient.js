import React, { Component } from 'react';

const Ingredient = ({ ingredient, quantity, measurement }) => {
  return (
    <li className='ingredient'>
      <div className='list_ingredient'>
        <label className='list_label'> {ingredient} </label>
        <div className='list_quantity'>
          <p className='list_count'> : {quantity} </p>
          <p className='list_measurement'> {measurement} </p>
        </div>
      </div>
      <div className='list_divider'></div>
    </li>
  );
};

export default Ingredient;
