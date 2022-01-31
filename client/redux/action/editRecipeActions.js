import * as types from './actionTypes';

export const addRecipeForEdit = (payload) => ({
  type: types.EDIT_RECIPE_INSERT,
  payload,
});

export const editIngredientUpdate = (payload) => ({
  type: types.EDIT_RECIPE_INGREDIENTS_UPDATE,
  payload,
});

export const editInstructionUpdate = (payload) => ({
  type: types.EDIT_RECIPE_INSTRUCTIONS_UPDATE,
  payload,
});

export const editTitleUpdate = (payload) => ({
  type: types.EDIT_RECIPE_TITLE_UPDATE,
  payload,
});

export const cleanEditState = () => ({
  type: types.EDIT_CLEAN_STATE,
});
