import * as types from './actionTypes';

export const populateRecipes = (payload) => ({
  type: types.RECIPE_GET,
  payload,
});

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

export const updateActiveId = (payload) => ({
  type: types.RECIPE_ACTIVEID_SWITCH,
  payload,
});
