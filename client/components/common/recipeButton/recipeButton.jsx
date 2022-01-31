import React, { memo } from 'react';

const RecipeButton = memo(
  ({ label, id, activeId, handleClick = () => {}, ...props }) => {
    return (
      <button
        onClick={() => handleClick(id)}
        className={`recipeButton ${
          activeId && activeId === id && 'active_recipe'
        }`}
        {...props}
      >
        {label}
      </button>
    );
  }
);

export default RecipeButton;
