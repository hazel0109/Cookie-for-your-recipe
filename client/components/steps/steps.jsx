import React, { memo } from 'react';

const Steps = memo(({ index, step }) => {
  return (
    <li className='recipe_step'>
      <label className='recipe_process'>{index}</label>
      <div className='recipe_content'>{step}</div>
    </li>
  );
});

export default Steps;
