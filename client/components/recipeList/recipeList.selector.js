export const recipeListSelector = (state) => ({
  recipes: state.recipes.recipesList,
  activeId: state.recipes.activeId,
});
