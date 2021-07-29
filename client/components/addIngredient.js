import React, { Component } from 'react';

const AddIngredient = ({ id, ingredientValue, setIngredient }) => {
  //Can I show number next to the input box?
  return (
    <li className='add_ingLine'>
      <input
        type='text'
        className='input_ingredient'
        placeholder='ingredient'
        value={ingredientValue}
        onChange={(e) => setIngredient('ingredient', e.target.value, id)}
      ></input>
      <input type='text' className='input_quantity' placeholder='qt'></input>
      <input
        type='text'
        className='input_measurement'
        placeholder='pcs'
      ></input>
    </li>
  );
};

export default AddIngredient;