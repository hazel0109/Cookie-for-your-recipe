import * as types from './actionTypes';

export const populateRecipes = (payload) => ({
  type: types.RECIPE_GET,
  payload,
});

export const updateActiveId = (payload) => ({
  type: types.RECIPE_ACTIVEID_SWITCH,
  payload,
});

export const updateRecipe = (payload) => ({
  type: types.RECIPE_UPDATE,
  payload,
});

export const deleteRecipe = (payload) => ({
  type: types.RECIPE_DELETE,
  payload,
});
