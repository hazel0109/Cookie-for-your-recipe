import React, { useEffect, useState, useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editInstructionUpdate } from '../../redux/action/editRecipeActions';
import { EditStepsSelector } from './editRecipeSteps.selector';
import UpsertStep from '../upsertStep/upsertStep';

const EditRecipeSteps = memo(() => {
  const [instructions, setInstructions] = useState([]);
  const dispatch = useDispatch();
  const { initInstructions } = useSelector(EditStepsSelector);

  useEffect(() => {
    setInstructions(initInstructions);
  }, []);

  useEffect(() => {
    const list = instructions.filter((item) => item.instruction !== '');
    dispatch(editInstructionUpdate(list));
    const prev = { ...instructions[instructions.length - 2] };
    const last = { ...instructions[instructions.length - 1] };
    if (last.id && last.instruction !== '') {
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

  const addInstructionsCallback = useCallback((value, id) => {
    setInstructions((instructions) => {
      return instructions.map((item) => {
        if (item.id === id) {
          return { ...item, instruction: value };
        } else {
          return item;
        }
      });
    });
  }, []);

  const totalSteps = instructions.map((step) => {
    return (
      <UpsertStep
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
export default EditRecipeSteps;
