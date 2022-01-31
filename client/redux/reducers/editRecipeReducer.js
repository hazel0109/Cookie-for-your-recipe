import * as types from '../action/actionTypes';

const initialState = {
  _id: null,
  title: '',
  ingredients: [],
  instructions: [],
};

export const EditReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_RECIPE_INSERT: {
      return {
        ...state,
        _id: action.payload._id,
        title: action.payload.title,
        ingredients: action.payload.ingredients,
        instructions: action.payload.instructions,
      };
    }
    case types.EDIT_RECIPE_INGREDIENTS_UPDATE: {
      return {
        ...state,
        ingredients: action.payload,
      };
    }
    case types.EDIT_RECIPE_INSTRUCTIONS_UPDATE: {
      return {
        ...state,
        instructions: action.payload,
      };
    }
    case types.EDIT_RECIPE_TITLE_UPDATE: {
      return {
        ...state,
        title: action.payload,
      };
    }
    case types.EDIT_CLEAN_STATE: {
      return {
        ...state,
        _id: null,
        title: '',
        ingredients: [],
        instructions: [],
      };
    }
    default: {
      return state;
    }
  }
};
