import React, { Component } from 'react';

const Ingredient = () => {
  return (
    <li className='ingredient'>
      <div className='list_ingredient'>
        <label className='list_label'> Banana </label>
        <div className='list_quantity'>
          <p className='list_count'> : 10300 </p>
          <p className='list_measurement'> pcs </p>
        </div>
      </div>
      <div className='list_divider'></div>
    </li>
  );
};

export default Ingredient;
