import { combineReducers } from 'redux';
import { RecipesReducer } from './recipesReducer';
import { PopupReducer } from './popupReducer';
import { EditReducer } from './editRecipeReducer';

export const reducers = combineReducers({
  recipes: RecipesReducer,
  popup: PopupReducer,
  editRecipe: EditReducer,
});
