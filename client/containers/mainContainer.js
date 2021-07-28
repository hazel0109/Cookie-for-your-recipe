import React, { Component } from 'react';
import ItemList from '../components/itemList';
import ContentContainer from './contentContainer';
import Header from '../components/header';

const MainContainer = () => {
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
