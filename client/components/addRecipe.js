import React, { memo } from 'react';

const AddRecipe = memo(({ id, stepValue, setInstruction }) => {
  return (
    <li className='add_recipe'>
      <span
        className='addIngredients__input input_recipe'
        role='textbox'
        value={stepValue}
        contentEditable
        onInput={(e) => setInstruction(e.currentTarget.textContent, id)}
      ></span>
    </li>
  );
});

export default AddRecipe;
