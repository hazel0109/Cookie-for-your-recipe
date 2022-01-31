import React, { memo } from 'react';
import ContentEditable from 'react-contenteditable';

const UpsertStep = memo(({ id, stepValue, setInstruction }) => {
  return (
    <li className='add_recipe'>
      <ContentEditable
        className='input_recipe'
        onChange={(e) => {
          setInstruction(e.target.value, id);
        }}
        html={stepValue}
      />
    </li>
  );
});

export default UpsertStep;
