import React, { useEffect, useState, useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import AddIngredient from './addIngredient';
import { newRecipeIngredientspdate } from '../redux/action/actions';

const AddIngredientLists = memo(() => {
  const initList = [
    {
      id: 1,
      ingredient: '',
      quantity: '',
      measurement: '',
    },
    {
      id: 2,
      ingredient: '',
      quantity: '',
      measurement: '',
    },
    {
      id: 3,
      ingredient: '',
      quantity: '',
      measurement: '',
    },
  ];
  const [ingredients, setIngredients] = useState(initList);
  const dispatch = useDispatch();

  useEffect(() => {
    const list = ingredients.filter((item) => item.ingredient !== '');
    dispatch(newRecipeIngredientspdate(list));
    const prev = { ...ingredients[ingredients.length - 2] };
    const last = { ...ingredients[ingredients.length - 1] };
    if (last.ingredient !== '') {
      addRow(last.id);
    }
    if (prev.ingredient === '' && prev.id > 2) {
      removeRow();
    }
  }, [ingredients]);

  const addRow = (itemId) => {
    setIngredients((ingredients) => [
      ...ingredients,
      { id: itemId + 1, ingredient: '', quantity: '', measurement: '' },
    ]);
  };

  const removeRow = () => {
    setIngredients((ingredients) => {
      const copy = [...ingredients];
      copy.pop();
      return copy;
    });
  };

  const onChangeCallback = useCallback(
    (target, value, id) =>
      setIngredients((ingredients) => {
        return ingredients.map((item) => {
          if (item.id === id) {
            return { ...item, [target]: value };
          } else {
            return item;
          }
        });
      }),
    []
  );

  const totalIngredients = ingredients.map((row) => (
    <AddIngredient
      id={row.id}
      key={row.id}
      ingredientValue={row.ingredient}
      quantityValue={row.quantity}
      measurementValue={row.measurement}
      setIngredient={onChangeCallback}
    />
  ));

  return (
    <ul className='add_ingList'>
      <p className='accentFontColor'>Simply add Ingredients for your recipe!</p>
      <li className='add_ingLine'>
        <div id='add_ingredient'>Ingredient</div>
        <div id='add_quantity'>Quantity</div>
        <div>Measurement</div>
      </li>
      {totalIngredients}
    </ul>
  );
});

export default AddIngredientLists;
