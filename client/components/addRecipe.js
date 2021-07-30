import React, { Component, useState } from 'react';

const AddRecipe = ({ id, stepValue, setInstruction }) => {
  //Can I show number next to the input box?

  return (
    <li className='add_recipe'>
      <span
        className='input_recipe'
        role='textbox'
        // value={stepValue}
        contentEditable
        onInput={(e) => setInstruction(e.currentTarget.textContent, id)}
      ></span>
    </li>
  );
};

export default AddRecipe;

// femwlnflewlflewnflewnflewnflnewlfnlewnflewnflewnflnewlfnlewnflewnflewnlfewlfnlewnflewnflewnflewnlfnlewnflewnflnewlfnlewnflnewlfnlewnflewnflewnflnewlfnelnflewnfenwlfnelwnflewnflenwflwe
