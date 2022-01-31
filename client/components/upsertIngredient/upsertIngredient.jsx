import React, { memo } from 'react';
import { PopupTextInput } from '../common';

const UpsertIngredient = memo(
  ({ id, ingredientValue, quantityValue, measurementValue, setIngredient }) => {
    return (
      <>
        <PopupTextInput
          placeholder='ingredient'
          name='ingredient'
          value={ingredientValue}
          handleChange={(e) => setIngredient(e.target.name, e.target.value, id)}
        />
        <PopupTextInput
          placeholder='qt'
          name='quantity'
          autoComplete='off'
          value={quantityValue}
          inputPosition={'right'}
          onChange={(e) => setIngredient(e.target.name, e.target.value, id)}
        />
        <PopupTextInput
          placeholder='pcs'
          name='measurement'
          value={measurementValue}
          inputPosition={'right'}
          handleChange={(e) => setIngredient(e.target.name, e.target.value, id)}
        />
      </>
    );
  }
);

export default UpsertIngredient;
