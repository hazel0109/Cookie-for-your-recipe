import React, { memo } from 'react';

const AddIngredient = memo(
  ({ id, ingredientValue, quantityValue, measurementValue, setIngredient }) => {
    return (
      <li className='add_ingLine'>
        <input
          type='text'
          className='input_ingredient'
          placeholder='ingredient'
          name='ingredient'
          value={ingredientValue}
          onChange={(e) => setIngredient(e.target.name, e.target.value, id)}
        ></input>
        <input
          type='text'
          className='input_quantity'
          placeholder='qt'
          name='quantity'
          value={quantityValue}
          onChange={(e) => setIngredient(e.target.name, e.target.value, id)}
        ></input>
        <input
          type='text'
          className='input_measurement'
          placeholder='pcs'
          name='measurement'
          value={measurementValue}
          onChange={(e) => setIngredient(e.target.name, e.target.value, id)}
        ></input>
      </li>
    );
  }
);

export default AddIngredient;
