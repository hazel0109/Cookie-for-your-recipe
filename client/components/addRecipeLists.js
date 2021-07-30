import React, { Component, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { newRecipeInstructionsUpdate } from '../redux/action/actions';
import AddRecipe from './addRecipe';

const AddRecipeLists = () => {
  const [instructions, setInstructions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newRecipeInstructionsUpdate(instructions));
  }, [instructions]);

  //each instruction needs id, and need to be in the state with id.
  const addInstructionsCallback = (value, id) => {
    console.log(value);
    const copy = [...instructions];
    copy[id] = value;
    setInstructions(copy);
  };

  return (
    <ul className='add_recipeList'>
      <p className='accentFontColor'>Add steps for your recipe!</p>
      <AddRecipe
        id={0}
        // stepValue={instructions[0]}
        setInstruction={addInstructionsCallback}
      />
      <AddRecipe
        id={1}
        // stepValue={instructions[1]}
        setInstruction={addInstructionsCallback}
      />
      <AddRecipe
        id={2}
        // stepValue={instructions[2]}
        setInstruction={addInstructionsCallback}
      />
      <AddRecipe
        id={3}
        // stepValue={instructions[1]}
        setInstruction={addInstructionsCallback}
      />
      <AddRecipe
        id={4}
        // stepValue={instructions[2]}
        setInstruction={addInstructionsCallback}
      />
      <AddRecipe
        id={5}
        // stepValue={instructions[1]}
        setInstruction={addInstructionsCallback}
      />
      <AddRecipe
        id={6}
        // stepValue={instructions[2]}
        setInstruction={addInstructionsCallback}
      />
      <AddRecipe
        id={7}
        // stepValue={instructions[1]}
        setInstruction={addInstructionsCallback}
      />
      <AddRecipe
        id={8}
        // stepValue={instructions[2]}
        setInstruction={addInstructionsCallback}
      />
      <AddRecipe
        id={9}
        // stepValue={instructions[1]}
        setInstruction={addInstructionsCallback}
      />
      <AddRecipe
        id={10}
        // stepValue={instructions[2]}
        setInstruction={addInstructionsCallback}
      />
    </ul>
  );
  //  <ul className='ingredientLists'>{ingredientMaker()}</ul>;
};

export default AddRecipeLists;
