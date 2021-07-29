import * as types from '../action/actionTypes';

const initialState = {
  title: '',
  ingredients: [],
  instructions: [],
};

export const PopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POPUP_RECIPE_INGREDIENT_UPDATE: {
      return {
        ...state,
        ingredients: action.payload,
      };
    }
    case types.POPUP_RECIPE_INSTRUCTIONS_UPDATE: {
      return {
        ...state,
        instructions: state.instructions.concat(action.payload),
      };
    }
    case types.POPUP_RECIPE_TITLE_UPDATE: {
      return {
        ...state,
        title: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
