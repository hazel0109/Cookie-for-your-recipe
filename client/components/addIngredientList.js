import React, { Component, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AddIngredient from './addIngredient';
import { newRecipeIngredientspdate } from '../redux/action/actions';

const AddIngredientLists = () => {
  const [ingredients, setIngredients] = useState([]);
  // const [addArray, setAddArray] = useState([]);
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

  // const Ingredient = (idx) => {
  //   console.log(idx);
  //   return (
  //     <AddIngredient
  //       id={idx}
  //       key={idx}
  //       ingredientValue={ingredients[idx]?.['ingredient']?.value}
  //       quantityValue={ingredients[idx]?.['quantity']?.value}
  //       measurementValue={ingredients[idx]?.['measurement']?.value}
  //       setIngredient={onChangeCallback}
  //     />
  //   );
  // };

  // useEffect(() => {
  // let result = [];
  // for (let i = 0; i < 3; i++) {
  //   result = result.concat(Ingredient(i));
  // }
  // setAddArray(result);
  // }, []);

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
      {/* {addArray} */}
      <AddIngredient
        id={0}
        ingredientValue={ingredients[0]?.['ingredient']?.value}
        quantityValue={ingredients[0]?.['quantity']?.value}
        measurementValue={ingredients[0]?.['measurement']?.value}
        setIngredient={onChangeCallback}
      />
      <AddIngredient
        id={1}
        ingredientValue={ingredients[1]?.['ingredient']?.value}
        quantityValue={ingredients[1]?.['quantity']?.value}
        measurementValue={ingredients[1]?.['measurement']?.value}
        setIngredient={onChangeCallback}
      />
      <AddIngredient
        id={2}
        ingredientValue={ingredients[2]?.['ingredient']?.value}
        quantityValue={ingredients[2]?.['quantity']?.value}
        measurementValue={ingredients[2]?.['measurement']?.value}
        setIngredient={onChangeCallback}
      />
      <AddIngredient
        id={3}
        ingredientValue={ingredients[3]?.['ingredient']?.value}
        quantityValue={ingredients[3]?.['quantity']?.value}
        measurementValue={ingredients[3]?.['measurement']?.value}
        setIngredient={onChangeCallback}
      />
      <AddIngredient
        id={4}
        ingredientValue={ingredients[4]?.['ingredient']?.value}
        quantityValue={ingredients[4]?.['quantity']?.value}
        measurementValue={ingredients[4]?.['measurement']?.value}
        setIngredient={onChangeCallback}
      />
      <AddIngredient
        id={5}
        ingredientValue={ingredients[5]?.['ingredient']?.value}
        quantityValue={ingredients[5]?.['quantity']?.value}
        measurementValue={ingredients[5]?.['measurement']?.value}
        setIngredient={onChangeCallback}
      />
      <AddIngredient
        id={6}
        ingredientValue={ingredients[6]?.['ingredient']?.value}
        quantityValue={ingredients[6]?.['quantity']?.value}
        measurementValue={ingredients[6]?.['measurement']?.value}
        setIngredient={onChangeCallback}
      />
      <AddIngredient
        id={7}
        ingredientValue={ingredients[7]?.['ingredient']?.value}
        quantityValue={ingredients[7]?.['quantity']?.value}
        measurementValue={ingredients[7]?.['measurement']?.value}
        setIngredient={onChangeCallback}
      />
    </ul>
  );
  //  <ul className='ingredientLists'>{ingredientMaker()}</ul>;
};

export default AddIngredientLists;
