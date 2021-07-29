import * as types from '../action/actionTypes';

const initialState = {
  recipes: [],
  activeId: null,
};

export const RecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECIPE_GET: {
      return {
        ...state,
        recipes: action.payload,
        activeId: action.payload[0]._id,
      };
    }
    case types.RECIPE_INSERT: {
      return {
        ...state,
        isLoading: false,
        error: false,
        recipes: state.recipes.push(action.payload),
      };
    }
    default: {
      return state;
    }
  }
};
