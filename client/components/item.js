import React, { Component } from 'react';

const Item = ({ index, title }) => {
  return <button className='item'>{title}</button>;
};

export default Item;
