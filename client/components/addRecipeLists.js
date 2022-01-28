import React, { useEffect, useState, useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import { newRecipeInstructionsUpdate } from '../redux/action/actions';
import AddRecipe from './addRecipe';

const AddRecipeLists = memo(() => {
  const initList = [
    { id: 1, instruction: '' },
    { id: 2, instruction: '' },
    { id: 3, instruction: '' },
  ];
  const [instructions, setInstructions] = useState(initList);
  const dispatch = useDispatch();

  useEffect(() => {
    const list = instructions.filter((item) => item.instruction !== '');
    dispatch(newRecipeInstructionsUpdate(list));
    const prev = { ...instructions[instructions.length - 2] };
    const last = { ...instructions[instructions.length - 1] };
    if (last.instruction !== '') {
      addStep(last.id);
    }
    if (prev.instruction === '' && prev.id > 2) {
      removeStep();
    }
  }, [instructions]);

  const addStep = (itemId) => {
    setInstructions((instructions) => [
      ...instructions,
      { id: itemId + 1, instruction: '' },
    ]);
  };

  const removeStep = () => {
    setInstructions((instructions) => {
      const copy = [...instructions];
      copy.pop();
      return copy;
    });
  };

  const addInstructionsCallback = useCallback(
    (value, id) =>
      setInstructions((instructions) => {
        return instructions.map((item) => {
          if (item.id === id) {
            return { ...item, instruction: value };
          } else {
            return item;
          }
        });
      }),
    []
  );

  const totalSteps = instructions.map((step) => {
    return (
      <AddRecipe
        key={step.id}
        id={step.id}
        stepValue={step.instruction}
        setInstruction={addInstructionsCallback}
      />
    );
  });

  return (
    <ul className='add_recipeList'>
      <p className='accentFontColor'>Add steps for your recipe!</p>
      {totalSteps}
    </ul>
  );
});

export default AddRecipeLists;
