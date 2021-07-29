export const ingredientListsSelector = (state) => ({
  recipes: state.recipes.recipes,
  activeId: state.recipes.activeId,
});
