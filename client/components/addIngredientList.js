import React, { Component, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AddIngredient from './addIngredient';
import { newRecipeIngredientspdate } from '../redux/action/actions';

const AddIngredientLists = () => {
  const [ingredients, setIngredients] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(ingredients);
    dispatch(newRecipeIngredientspdate(ingredients));
  }, [ingredients]);

  const onChangeCallback = (name, value, id) => {
    const copy = [...ingredients];
    const ingredientIndex = ingredients.findIndex(
      (ingredient) => ingredient.id === id
    );
    console.log(ingredientIndex >= 0);
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

  return (
    <ul className='add_ingList'>
      <p className='accentFontColor'>Simply add Ingredients for your recipe!</p>
      <li className='add_ingLine'>
        <div id='title_ingredient'>Ingredient</div>
        <div>Quantity</div>
        <div>Measurement</div>
      </li>
      <AddIngredient
        id={0}
        ingredientValue={ingredients[0]?.ingredientValue}
        setIngredient={onChangeCallback}
      />
      <AddIngredient
        id={1}
        ingredientValue={ingredients[1]?.ingredientValue}
        setIngredient={onChangeCallback}
      />
      <AddIngredient
        id={2}
        ingredientValue={ingredients[2]?.ingredientValue}
        setIngredient={onChangeCallback}
      />
    </ul>
  );
  //  <ul className='ingredientLists'>{ingredientMaker()}</ul>;
};

export default AddIngredientLists;
