import React, { memo } from 'react';

const AddIngredient = memo(
  ({ id, ingredientValue, quantityValue, measurementValue, setIngredient }) => {
    return (
      <>
        <input
          type='text'
          className='addIngredients__input addIngredients__gridColumn--first'
          placeholder='ingredient'
          name='ingredient'
          value={ingredientValue}
          onChange={(e) => setIngredient(e.target.name, e.target.value, id)}
        ></input>
        <input
          type='text'
          className='addIngredients__input input_quantity'
          placeholder='qt'
          name='quantity'
          autoComplete='off'
          value={quantityValue}
          onChange={(e) => setIngredient(e.target.name, e.target.value, id)}
        ></input>
        <input
          type='text'
          className='addIngredients__input input_measurement'
          placeholder='pcs'
          name='measurement'
          value={measurementValue}
          onChange={(e) => setIngredient(e.target.name, e.target.value, id)}
        ></input>
      </>
    );
  }
);

export default AddIngredient;
