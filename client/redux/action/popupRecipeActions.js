import * as types from './actionTypes';

export const addNewRecipe = (payload) => ({
  type: types.RECIPE_INSERT,
  payload,
});

export const newRecipeTitleUpdate = (payload) => ({
  type: types.POPUP_RECIPE_TITLE_UPDATE,
  payload,
});

export const newRecipeIngredientspdate = (payload) => ({
  type: types.POPUP_RECIPE_INGREDIENT_UPDATE,
  payload,
});

export const newRecipeInstructionsUpdate = (payload) => ({
  type: types.POPUP_RECIPE_INSTRUCTIONS_UPDATE,
  payload,
});

export const cleanPopupState = () => ({
  type: types.POPUP_CLEAN_STATE,
});
