export const ingredientListsSelector = (state) => ({
  recipes: state.recipes.recipesList,
  activeId: state.recipes.activeId,
});
