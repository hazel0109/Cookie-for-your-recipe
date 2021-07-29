import React, { Component } from 'react';
import Recipe from './recipe';

const inside = `this is how we are going to write the recipe. how much width would look
good on this? hahahahah I'm sleepy. I don't think I can touch the
backend at all. this is how we are going to write the recipe. how much
width would look good on this? hahahahah I'm sleepy. I don't think I can
touch the backend at all.`;
const recipeList = [
  inside,
  inside,
  inside,
  inside,
  inside,
  inside,
  inside,
  inside,
];

const RecipeMaker = () => {
  return recipeList.map((recipe, idx) => {
    return <Recipe key={idx} id={idx} index={idx + 1} recipe={recipe} />;
  });
};

const MainRecipe = () => {
  return <ul className='mainRecipe'>{RecipeMaker()}</ul>;
};

export default MainRecipe;
