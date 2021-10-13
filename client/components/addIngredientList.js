import React, { Component, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AddIngredient from './addIngredient';
import { newRecipeIngredientspdate } from '../redux/action/actions';

const AddIngredientLists = () => {
  const [ingredients, setIngredients] = useState([]);
  const [addArray, setAddArray] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newRecipeIngredientspdate(ingredients));
  }, [ingredients]);

  const onChangeCallback = (name, value, id) => {
    const copy = [...ingredients];
    const ingredientIndex = ingredients.findIndex(
      (ingredient) => ingredient.id === id
    );
    const ingredient =
      ingredientIndex >= 0
        ? {
            ...ingredients[ingredientIndex],
            [name]: value,
          }
        : {
            id,
            [name]: value,
          };
    copy[id] = ingredient;
    setIngredients(copy);
  };

  const Ingredient = (idx) => {
    console.log(idx);
    return (
      <AddIngredient
        id={idx}
        key={idx}
        ingredientValue={ingredients[idx]?.['ingredient']?.value}
        quantityValue={ingredients[idx]?.['quantity']?.value}
        measurementValue={ingredients[idx]?.['measurement']?.value}
        setIngredient={onChangeCallback}
      />
    );
  };

  useEffect(() => {
    let result = [];
    for (let i = 0; i < 10; i++) {
      result = result.concat(Ingredient(i));
    }
    setAddArray(result);
  }, []);

  // useEffect(() => {
  //   console.log(ingredients.length, addArray.length);
  //   if (ingredients.length === addArray.length && ingredients.length !== 0) {
  //     const result = addArray.concat(Ingredient(addArray.length));
  //     setAddArray(result);
  //   }
  // }, [ingredients]);

  return (
    <ul className='add_ingList'>
      <p className='accentFontColor'>Simply add Ingredients for your recipe!</p>
      <li className='add_ingLine'>
        <div id='title_ingredient'>Ingredient</div>
        <div>Quantity</div>
        <div>Measurement</div>
      </li>
      {addArray}
    </ul>
  );
  //  <ul className='ingredientLists'>{ingredientMaker()}</ul>;
};

export default AddIngredientLists;
