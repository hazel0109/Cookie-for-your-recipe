import { combineReducers } from 'redux';
import { RecipesReducer } from './recipesReducer';
import { PopupReducer } from './popupRecipe';

export const reducers = combineReducers({
  recipes: RecipesReducer,
  popup: PopupReducer,
});
