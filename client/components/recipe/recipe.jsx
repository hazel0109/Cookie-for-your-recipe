import React, { memo } from 'react';

const Recipe = memo(({ title, onClick, id, activeId }) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`item ${activeId && activeId === id && 'active_recipe'}`}
    >
      {title}
    </button>
  );
});

export default Recipe;
