import React, { useEffect, useState, useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UpsertIngredient from '../upsertIngredient/upsertIngredient';
import { editIngredientUpdate } from '../../redux/action/editRecipeActions';
import { EditIngredientsSelector } from './editIngredientList.selector';

const EditIngredientList = memo(() => {
  const [ingredients, setIngredients] = useState([]);
  const dispatch = useDispatch();
  const { initIngredients } = useSelector(EditIngredientsSelector);

  useEffect(() => {
    setIngredients(initIngredients);
  }, []);

  useEffect(() => {
    const list = ingredients.filter((item) => item.ingredient !== '');
    dispatch(editIngredientUpdate(list));
    const prev = { ...ingredients[ingredients.length - 2] };
    const last = { ...ingredients[ingredients.length - 1] };
    if (last.id && last.ingredient !== '') {
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
    <UpsertIngredient
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
      <p className='accentFontColor'>Add Ingredients for your recipe!</p>
      <div className='addIngredients__grid'>
        <p className='addIngredients__label '>Ingredient</p>
        <p className='addIngredients__label'>Quantity</p>
        <p className='addIngredients__label'>Measurement</p>
        {totalIngredients}
      </div>
    </ul>
  );
});

export default EditIngredientList;
