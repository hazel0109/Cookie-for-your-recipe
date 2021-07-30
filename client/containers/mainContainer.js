import React, { Component, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ItemList from '../components/itemList';
import ContentContainer from './contentContainer';
import Header from '../components/header';
import RecipeService from '../services/recipesService/recipeService';
import { populateRecipes } from '../redux/action/actions';

const MainContainer = () => {
  const dispatch = useDispatch();

  // store is updated, how we can get the data gain?
  // use another effect?

  useEffect(async () => {
    const result = await RecipeService.getRecipes(
      'http://localhost:3000/recipes'
    );
    // console.log(result);
    dispatch(populateRecipes(result));
  }, []);

  return (
    <div className='container'>
      <Header />
      <div className='main'>
        <ItemList />
        <ContentContainer />
      </div>
    </div>
  );
};

export default MainContainer;
