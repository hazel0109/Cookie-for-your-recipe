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
        isLoading: false,
        error: false,
        recipesList: action.payload,
      };
    }
    case types.RECIPE_ACTIVEID_SWITCH: {
      return {
        ...state,
        activeId: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
