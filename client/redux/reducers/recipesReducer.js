import * as types from '../action/actionTypes';

const initialState = {
  recipesList: [],
  activeId: null,
};

export const RecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECIPE_GET: {
      return {
        ...state,
        recipesList: action.payload,
        activeId: action.payload[0]._id,
      };
    }
    case types.RECIPE_INSERT: {
      return {
        ...state,
        recipesList: action.payload,
      };
    }
    case types.RECIPE_ACTIVEID_SWITCH: {
      return {
        ...state,
        activeId: action.payload,
      };
    }
    case types.RECIPE_UPDATE: {
      const updateList = state.recipesList.map((recipe) => {
        if (recipe._id === action.payload._id) {
          return action.payload;
        }
        return recipe;
      });

      return {
        ...state,
        recipesList: updateList,
      };
    }
    case types.RECIPE_DELETE: {
      const updateList = state.recipesList.filter(
        (recipe) => recipe._id !== action.payload
      );

      return {
        ...state,
        recipesList: updateList,
      };
    }
    default: {
      return state;
    }
  }
};
